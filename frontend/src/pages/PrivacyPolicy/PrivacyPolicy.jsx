import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className='privacy'>
            <h1>Privacy Policy</h1>
            <p className='privacy-text'>At <span>Jon Bakes</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit or make a purchase from our website.</p>
            <h1>Information We Collect</h1>
            <p className='privacy-text'>When you use our website, we may collect the following information:</p>
            <ul className='privacy-list'>
                <li className='privacy-list-item'>Personal details such as <span>name, email address, phone number, and delivery address</span></li>
                <li className='privacy-list-item'><span>Payment information</span> when placing an order</li>
                <li className='privacy-list-item'>Information related to your <span>orders and preferences</span></li>
                <li className='privacy-list-item'>Website usage data through cookies and analytics tools</li>
            </ul>
            <h1>How We Use Your Information</h1>
            <p className='privacy-text'>We use the collected information to:</p>
            <ul className='privacy-list'>
                <li className='privacy-list-item'>Process and deliver your orders</li>
                <li className='privacy-list-item'>Communicate with you about your purchases or inquiries</li>
                <li className='privacy-list-item'>Improve our website, products, and services</li>
                <li className='privacy-list-item'>Send order confirmations, updates, and promotional offers (if you opt-in)</li>
            </ul>
            <h1>Payment Security</h1>
            <p className='privacy-text'>We use <span>secure payment gateways and encryption technologies</span> to ensure your payment information is protected. We do not store sensitive payment details such as card numbers on our servers.</p>
            <h1>Cookies</h1>
            <p className='privacy-text'>Our website may use cookies to improve your browsing experience. Cookies help us understand how visitors interact with our website and allow us to provide a better and more personalized service.</p>
            <h1>Sharing of Information</h1>
            <p className='privacy-text'>We do not sell, rent, or trade your personal information. Your information may only be shared with trusted partners such as <span>delivery services and payment providers</span> to complete your order.</p>
            <h1>Data Protection</h1>
            <p className='privacy-text'>We take appropriate security measures to protect your personal data from unauthorized access, misuse, or disclosure.</p>
            <h1>Your Rights</h1>
            <p className='privacy-text'>You have the right to:</p>
            <ul className='privacy-list'>
                <li className='privacy-list-item'>Access your personal information</li>
                <li className='privacy-list-item'>Request corrections to inaccurate information</li>
                <li className='privacy-list-item'>Request deletion of your personal data where applicable</li>
            </ul>
            <h1>Updates to This Policy</h1>
            <p className='privacy-text'>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>
            <h1>Contact Us</h1>
            <p className='privacy-text'>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className='privacy-text'><span>📧 Email:</span> jonbakes@gmail.com</p>
            <p className='privacy-text'><span>📞 Phone:</span> +91-7598 451 524</p>
        </div>
    )
}

export default PrivacyPolicy;
