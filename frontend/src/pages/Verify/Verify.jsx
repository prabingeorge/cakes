import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { appUrl, token } = useContext(StoreContext);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyPayment = async () => {
            const response = await axios.post(appUrl + "/api/order/verify", { success, orderId },{ headers: { token } });
            if (response?.data?.success) {
                toast.success("Your order has confirmed successfully. Thanks")
                navigate("/myorders");
            } else {
                navigate("/")
            }
        }
        verifyPayment();
    }, []);

    return (
        <div className='verify'>
            <div className="spinner"></div>
        </div>
    )
}

export default Verify;
