import React from 'react';

import './cart-dropdown.style.scss';

import CustomButton from '../custom-button/CustomButton';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='card-items'></div>
      <CustomButton type='button'>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
