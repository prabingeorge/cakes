import React, { useContext } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart, appUrl } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={`${appUrl}/api/food/image/${id}`} alt={name} />
                {!cartItems || !cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="remove" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='add' />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={image} alt='' />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">Rs. {price}</p>
            </div>
        </div>
    )
}

export default FoodItem;
