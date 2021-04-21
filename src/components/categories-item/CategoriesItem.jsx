import React from 'react';
import PropTypes from 'prop-types';

import './categories-item.style.scss';

const CategoriesItem = ({ categories: { title, size, imageUrl } }) => {
  return (
    <div className={`categories-item ${size}`}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

CategoriesItem.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default CategoriesItem;
