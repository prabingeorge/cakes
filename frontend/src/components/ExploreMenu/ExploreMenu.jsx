import React from 'react';
import './ExploreMenu.css';

const menu_list = [{ menu_name: "tiffin", menu_image: "tiffin.jpg" },
{ menu_name: "meal", menu_image: "meal.jpg" },
{ menu_name: "nonvegmeal", menu_image: "nonveg.jpg" },
{ menu_name: "biriyani", menu_image: "biriyani.jpg" }];

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Here is our menu</p>
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
