import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//icon
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//style
import './caret-icon.style.scss';

//actions
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartDropdown }) => {
  return (
    <div className='cart-icon' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

CartIcon.propTypes = {
  toggleCartDropdown: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
