import React from 'react';
import './ExploreMenu.css';

const menu_list = [{ menu_name: "chocolate", menu_image: "chocolate.avif", display_name: "Chocolate" },
{ menu_name: "vanilla", menu_image: "vanilla.avif", display_name: "Vanilla" }];

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our cakes</h1>
            <p className='explore-menu-text'>Step into a world of irresistible flavors and stunning designs. Our cakes are freshly baked, carefully decorated, and made to turn your special moments into unforgettable celebrations.</p>
            <div className="explore-menu-list">
                {menu_list?.map((item, index) => {
                    return (<div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item?.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category === item?.menu_name ? "active" : ""} src={"/images/menu/" + item?.menu_image} alt="" />
                        <p>{item.display_name}</p>
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
