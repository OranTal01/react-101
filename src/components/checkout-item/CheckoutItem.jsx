//dependencies
import React from 'react';
import PropTypes from 'prop-types';

//style
import './checkout-item.style.scss';

//actions
import {
  removeCartItem,
  decreaseCartItem,
  addItem,
} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({
  cartItem,
  removeCartItem,
  increaseCartItem,
  decreaseCartItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseCartItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => increaseCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  removeCartItem: PropTypes.func.isRequired,
  decreaseCartItem: PropTypes.func.isRequired,
  increaseCartItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeCartItem: cartItem => dispatch(removeCartItem(cartItem)),
  decreaseCartItem: cartItem => dispatch(decreaseCartItem(cartItem)),
  increaseCartItem: cartItem => dispatch(addItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
