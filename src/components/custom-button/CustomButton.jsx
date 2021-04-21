import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './custom-button.style.scss';

const CustomButton = ({ children, type }) => {
  return (
    <Fragment>
      <button className='custom-button' type={type}>
        {children}
      </button>
    </Fragment>
  );
};

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CustomButton;
