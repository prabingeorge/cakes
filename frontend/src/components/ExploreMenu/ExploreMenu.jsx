import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './ExploreMenu.css';

const ExploreMenu = ({ category, setCategory }) => {
    const { menuList, appUrl } = useContext(StoreContext);
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our cakes</h1>
            <p className='explore-menu-text'>Step into a world of irresistible flavors and stunning designs. Our cakes are freshly baked, carefully decorated, and made to turn your special moments into unforgettable celebrations.</p>
            <div className="explore-menu-list">
                {menuList?.map((item, index) => {
                    return (<div onClick={() => setCategory(prev => prev === item.category ? "All" : item?.category)} key={index} className='explore-menu-list-item'>
                        <img className={category === item?.category ? "active" : ""} src={appUrl + "/images-menu/" + item?.image} alt="" />
                        <p>{item.name}</p>
                    </div>)
                })}
            </div>
            <div>
                <hr />
            </div>
        </div>
    )
}

export default ExploreMenu;
