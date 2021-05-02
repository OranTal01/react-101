//dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

//style
import './collection-preview.style.scss';

//components
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ collections, history, match }) => {
  const { title, items, routeName } = collections;

  return (
    <div className='collection-preview'>
      <h1
        className='title'
        onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  collections: PropTypes.object.isRequired,
};

export default withRouter(CollectionPreview);
