import React, { useContext, useState } from 'react';
import './ItemDetails.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate, useParams } from 'react-router-dom';

const ItemDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, foodList, appUrl, loadCartData } = useContext(StoreContext);

    const cartSelectedItem = foodList.find((food) => food._id == id);

    const [data, setData] = useState({
        message: "",
        weight: 0.5,
        quantity: 1
    });

    const setWeight = (weightValue) => {
        setData({ ...data, weight: weightValue })
    }

    const onChangeHandler = (event) => {
        const name = event?.target?.name;
        const value = event?.target?.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const placeOrder = async () => {
        await addToCart(id, data);
        await loadCartData();
        navigate('/cart');
    }

    return (
        <form className='item-details'>
            <div className='item-details-left'>
                <img className='food-item-image' src={`${appUrl}/api/food/image/${id}`} alt={name} />
                <p className='description-text'><b>NOTE:</b> Design and icing of cake may vary from the image shown here since each chef has his/her own way of baking and designing a cake.</p>
            </div>
            <div className='item-details-right'>
                <div className="add-to-cart">
                    <h2>{cartSelectedItem?.name}</h2>
                    <div>
                        <div className="add-to-cart-details">
                            <p><b>Rs. {(cartSelectedItem?.price * data?.weight * 2)}</b></p>
                        </div>
                        <div className="add-to-cart-details">
                            <p>Weight:</p>
                        </div>
                        <div className="add-to-cart-details-weight">
                            <span onClick={() => setWeight(0.5)} className={0.5 === data?.weight ? "active" : ""}>500 gm</span>
                            <span onClick={() => setWeight(1)} className={1 === data?.weight ? "active" : ""}>1 kg</span>
                            <span onClick={() => setWeight(1.5)} className={1.5 === data?.weight ? "active" : ""}>1.5 kg</span>
                            <span onClick={() => setWeight(2)} className={2 === data?.weight ? "active" : ""}>2 kg</span>
                        </div>
                        <div className="add-to-cart-details">
                            <input name='message' onChange={onChangeHandler} value={data?.message} type="text" placeholder='Message on cake' />
                        </div>
                    </div>
                    <button type='button' className='button' onClick={placeOrder}>ADD TO CART</button>
                </div>
                <div className="product-section">
                    <div>
                        <h2>Product Description</h2>
                    </div>
                    <p className='description'>{cartSelectedItem?.description}</p>
                </div>
            </div>
        </form>
    )
}

export default ItemDetails;
