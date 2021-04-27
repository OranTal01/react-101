//dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//style
import './cart-dropdown.style.scss';

//components
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

// selectors for memorization
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
