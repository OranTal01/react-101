//dependencies
import React from 'react';

//style
import './spinner.style.scss';

//hoc
const Spinner = () => {
  return (
    <div className='spinner-overlay'>
      <div className='spinner-container'></div>
    </div>
  );
};

export default Spinner;
