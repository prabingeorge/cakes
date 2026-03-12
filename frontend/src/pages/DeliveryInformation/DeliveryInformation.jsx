import React from 'react';
import './DeliveryInformation.css';

const DeliveryInformation = () => {
  return (
    <div className='delivery-information'>
        <h1>Delivery Information</h1>
        <p className='delivery-information-text'>At <span>Jon Bakes</span>, we make sure your cakes reach you <span>fresh, safe, and on time</span>. Our delivery service is designed to bring delicious moments right to your doorstep.</p>
        <h1>Delivery Options</h1>
        <ul className='delivery-information-list'>
            <li className='delivery-information-item'><span>Same-Day Delivery:</span> Place your order before the cut-off time and enjoy same-day cake delivery.</li>
            <li className='delivery-information-item'><span>Midnight Delivery:</span> Surprise your loved ones with a special midnight cake delivery for birthdays and celebrations.</li>
            <li className='delivery-information-item'><span>Scheduled Delivery:</span> Choose a convenient date and time for your order to be delivered.</li>
        </ul>
        <h1>Delivery Areas</h1>
        <p className='delivery-information-text'>We currently deliver to selected locations to ensure <span>fast and reliable service</span>. Enter your delivery address during checkout to confirm availability.</p>
        <h1>Delivery Time</h1>
        <p className='delivery-information-text'>Our standard delivery time is between <span>9:00 AM and 6:00 PM.</span></p>
        <h1>Delivery Charges</h1>
        <p className='delivery-information-text'>Delivery charges may vary depending on the <span>location and delivery time slot</span>. The exact charge will be shown at checkout.</p>
        <h1>Important Notes</h1>
        <ul className='delivery-information-list'>
            <li className='delivery-information-item'>Please provide the <span>correct delivery address and contact number</span>.</li>
            <li className='delivery-information-item'>Our delivery partner will attempt delivery only once at the provided address.</li>
            <li className='delivery-information-item'>Cakes should be <span>refrigerated upon arrival</span> if not consumed immediately.</li>
        </ul>
        <p className='delivery-information-text'>We are committed to making your celebrations <span>sweet, smooth, and memorable</span> with our reliable cake delivery service. 🎂</p>
    </div>
  )
}

export default DeliveryInformation;
