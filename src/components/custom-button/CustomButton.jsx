import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string,
  otherProps: PropTypes.object,
  isGoogleSignIn: PropTypes.bool,
};

export default CustomButton;
