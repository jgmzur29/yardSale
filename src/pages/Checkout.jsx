import React from 'react'
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title"> My shopping cart </h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <span> 03.25.21 </span>
              <span> 3 articles </span>
            </p>
            <p> $2680 </p>
          </div>
        </div>
        <OrderItem />
      </div>
    </div>
  );
};

export default Checkout;