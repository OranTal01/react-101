//dependencies
import React from 'react';
import PropTypes from 'prop-types';

//style
import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button'>&#10005;</div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CheckoutItem;
