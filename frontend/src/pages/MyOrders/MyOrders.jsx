import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

    const { appUrl, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders1 = async () => {
        const response = await axios.post(appUrl + "/api/order/userorders", {}, { headers: { token } });
        setData(response?.data.data);
    }

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await axios.post(appUrl + "/api/order/userorders", {}, { headers: { token } });
            setData(response?.data.data);
        }
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="containers">
                {data.map((order, index) => {
                    return (
                        <div key={index} className='my-orders-order'>
                            <img src={assets.parcel_icon} alt="parcelicon" />
                            <p>{order?.items.map((item, index) => {
                                if (index === order.items.length - 1) {
                                    return item.name + " X " + item?.quantity
                                } else {
                                    return item.name + " X " + item?.quantity + ","
                                }
                            })}</p>
                            <p>${order?.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                            <button onClick={fetchOrders1}>Track Order</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyOrders;
