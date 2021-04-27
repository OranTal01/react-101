//dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

//style
import './cart-dropdown.style.scss';

//components
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

//actions
import { toggleCartDropdown } from '../../redux/cart/cart.actions.js';

// selectors for memorization
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length > 0 ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      {/* you can dispatch a action by default if you have mapStateToProps dispatch come in props automatic */}
      <CustomButton
        onClick={() => {
          dispatch(toggleCartDropdown());
          history.push('/checkout');
        }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
