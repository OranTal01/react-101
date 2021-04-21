import React from 'react';
import PropTypes from 'prop-types';

import './collection-preview.style.scss';

import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ collections }) => {
  const { title, items } = collections;

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(items => (
            <CollectionItem key={items.id} items={items} />
          ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  collections: PropTypes.object.isRequired,
};

export default CollectionPreview;
