//dependencies
import React from 'react';
import PropTypes from 'prop-types';

//components
import Spinner from '../spinner/Spinner';

//hoc
const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default WithSpinner;
