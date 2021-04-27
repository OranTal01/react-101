import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//icon
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//style
import './caret-icon.style.scss';

//actions
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

//selector for memorization
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartDropdown, itemsCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemsCount}</span>
    </div>
  );
};

CartIcon.propTypes = {
  toggleCartDropdown: PropTypes.func.isRequired,
  itemsCount: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
