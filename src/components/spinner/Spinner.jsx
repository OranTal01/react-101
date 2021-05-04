//dependencies
import React from 'react';
import PropTypes from 'prop-types';

//style
import './Spinner.style.scss';

//hoc
const Spinner = WrappedComponent => {
  const WithSpinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className='spinner-overlay'>
        <div className='spinner-container'></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return WithSpinner;
};

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Spinner;
