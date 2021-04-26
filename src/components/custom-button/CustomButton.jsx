//dependencies
import React from 'react';
import PropTypes from 'prop-types';

//style
import './custom-button.style.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string,
  otherProps: PropTypes.object,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool,
};

export default CustomButton;
