import React, { useContext } from 'react';
import './FoodItem.css';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price }) => {

    const navigate = useNavigate();
    const { appUrl } = useContext(StoreContext);

    const navigateItemDetails = (id) => {
        navigate(`/details/${id}#root`);
    };

    return (
        <div className='food-item' onClick={() => navigateItemDetails(id)}>
            <div className="food-item-img-container">
                <img className='food-item-image' src={`${appUrl}/api/food/image/${id}`} alt={name} />
                {/* {!cartItems || !cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="remove" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='add' />
                    </div>
                } */}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='' />
                </div>
                <p className="food-item-price">Rs. {price}</p>
                <button className='view-button'>View</button>
            </div>
        </div>
    )
}

export default FoodItem;
