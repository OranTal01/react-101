import React from 'react';
import PropTypes from 'prop-types';

import './form-input.style.scss';

const FormInput = ({ label, handleOnChange, ...otherInputProps }) => {
  return (
    <div className='group'>
      {label && (
        <label
          className={`${
            otherInputProps.value.length ? 'shrink' : ''
          }form-input-label`}>
          {label}
        </label>
      )}
      <input
        {...otherInputProps}
        className='form-input'
        onChange={handleOnChange}
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default FormInput;
