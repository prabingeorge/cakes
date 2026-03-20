import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const navigate = useNavigate();
  const { totalCartAmount, token, foodList, cartItems, appUrl } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    place: "",
    zipcode: "",
    email: "",
    phone: ""
  });

  const onChangeHandler = (event) => {
    const name = event?.target?.name;
    const value = event?.target?.value;
    setData(data => ({ ...data, [name]: value }));
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    foodList.map((item) => {
      if (cartItems[item._id]?.length > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id]?.length;
        itemInfo[item._id] = cartItems[item._id];
        delete itemInfo?.img;
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: totalCartAmount + 20
    }
    let response = await axios.post(appUrl + "/api/order/place", orderData, { headers: { token } });
    if (response?.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  }

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (totalCartAmount === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='name' onChange={onChangeHandler} value={data?.name} type="text" placeholder='Name' />
        </div>
        <input required name='place' onChange={onChangeHandler} value={data?.place} type="text" placeholder='Place' />
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={data?.zipcode} type="text" placeholder='Zip code' maxLength="6" />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data?.email} type="email" placeholder='Email' />
        <input required name='phone' onChange={onChangeHandler} value={data?.phone} type="text" placeholder='Mobile' minLength={10} maxLength="10" />
      </div>
      <div className='place-order-right'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs. {totalCartAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs. {totalCartAmount === 0 ? 0 : 20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs. {totalCartAmount === 0 ? 0 : totalCartAmount + 20}</b>
            </div>
          </div>
          <button className='delivery-button' type='submit'>CASH ON DELIVERY</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder;
