import React, { useContext } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';
import { FaRegSquareMinus , FaRegSquarePlus } from "react-icons/fa6";

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart, appUrl } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={appUrl + "/images/" + image} alt="" />
                {!cartItems || !cartItems[id]
                    // ? <img className='add' onClick={() => addToCart(id)} src="" alt="Add" />
                    ? <FaRegSquarePlus className='add' onClick={() => addToCart(id)} />
                    : <div className='food-item-counter'>
                        {/* <img onClick={() => removeFromCart(id)} src="" alt="remove" /> */}
                        <FaRegSquareMinus onClick={() => removeFromCart(id)} />
                        <p>{cartItems[id]}</p>
                        {/* <img onClick={() => addToCart(id)} src="" alt='add1' /> */}
                        <FaRegSquarePlus onClick={() => addToCart(id)} />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={image} alt='' />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem;
