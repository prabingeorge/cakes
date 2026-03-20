import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Cart = () => {

  const { cartItems, foodList, removeFromCart, totalCartAmount, appUrl, token } = useContext(StoreContext)
  const navigate = useNavigate();

  const proceedToCheckout = () => {
    if (!token) {
      toast.info("Need SignIn to proceed for payment!");
      return;
    }

    navigate('/order');
  }

  const continueShopping = () => {
    navigate('/home');
  }

  if (totalCartAmount == 0) {
    return (
      <div className='cart-empty'>
        <img className='empty_bucket_icon' src={assets.empty_bucket_icon} alt="empty bucket icon" />
        <button onClick={() => continueShopping()}>Continue Shopping</button>
      </div>
    )
  }

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className='cart-navigation'>
          <h2>Your Cart</h2>
          <Link className='navigate-button' to='/home'>
            <img className='left-arrow-icon' src={assets.left_arrow} alt="left arrow" /> Continue Shopping
          </Link>
        </div>
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <div>
            <div className='cart-items-food'>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
          </div>
        </div>
        <br />
        <hr />
        {foodList?.map((item, index) => {
          if (cartItems[item._id]?.length > 0) {
            return (
              <div key={index}>
                {cartItems[item?._id]?.map((food, index) => {
                  return (
                    <div key={index}>
                      <div className='cart-items-title cart-items-item'>
                        <img src={`${appUrl}/api/food/image/${item?._id}`} alt={item?.name} />
                        <p>{item?.name}</p>
                        <div key={index} className='cart-items-food food-list'>
                          <p>Rs. {item?.price}</p>
                          <p>{food?.weight} {food?.weight == 0.5 ? 'gm' : 'kg'}</p>
                          <p>Rs. {item?.price * food?.weight * 2}</p>
                          <p onClick={() => removeFromCart(item?._id, food)} className='cross'>x</p>
                        </div>
                      </div>
                      <hr />
                    </div>
                  )
                })}
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
          <button className='shopping-button' onClick={() => continueShopping()}>Continue Shopping</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code' />
              <button className='promocode-button'>Submit</button>
            </div>
          </div>
          <button className='checkout-button' onClick={() => proceedToCheckout()}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart;
