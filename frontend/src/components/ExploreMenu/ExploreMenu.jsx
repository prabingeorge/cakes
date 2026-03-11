import React from 'react';
import './ExploreMenu.css';

const menu_list = [{ menu_name: "egg", menu_image: "egg.jpg" },
{ menu_name: "eggless", menu_image: "eggless.jpg" }];

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our cakes</h1>
            <p className='explore-menu-text'>Here is our cakes with yammy taste.</p>
            <div className="explore-menu-list">
                {menu_list?.map((item, index) => {
                    return (<div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item?.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category === item?.menu_name ? "active" : ""} src={"/images/menu/" + item?.menu_image} alt="" />
                        <p>{item.menu_name}</p>
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
