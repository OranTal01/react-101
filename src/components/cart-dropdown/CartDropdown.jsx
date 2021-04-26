//dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//style
import './cart-dropdown.style.scss';

//components
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

const CartDropdown = ({ items }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = ({ cart: { items } }) => ({
  items,
});

export default connect(mapStateToProps)(CartDropdown);
