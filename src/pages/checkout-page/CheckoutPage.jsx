//dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//style
import './checkout-page.style.scss';

//components
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

//selectors
import {
  selectCartItems,
  selectTotalCartItems,
} from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${total}</div>
    </div>
  );
};

CheckoutPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  total: selectTotalCartItems(state),
});

export default connect(mapStateToProps)(CheckoutPage);
