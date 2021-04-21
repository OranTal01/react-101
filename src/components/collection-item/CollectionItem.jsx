import React from 'react';
import PropTypes from 'prop-types';

import './collection-item.style.scss';

const CollectionItem = ({ items }) => {
  const { imageUrl, name, price } = items;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

CollectionItem.propTypes = {
  items: PropTypes.object.isRequired,
};

export default CollectionItem;
