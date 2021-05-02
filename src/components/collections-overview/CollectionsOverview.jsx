//dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//components
import CollectionPreview from '../collection-preview/CollectionPreview';

//selectors
import { selectCollectionsForOverview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(collections => (
        <CollectionPreview key={collections.id} collections={collections} />
      ))}
    </div>
  );
};

CollectionsOverview.propTypes = {
  collections: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  collections: selectCollectionsForOverview(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
