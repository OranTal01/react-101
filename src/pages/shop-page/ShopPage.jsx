//dependencies
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//style
import './shop-page.style.scss';

//components
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

//selectors
import { selectCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => {
  return (
    <Fragment>
      {collections.map(collections => (
        <CollectionPreview key={collections.id} collections={collections} />
      ))}
    </Fragment>
  );
};

ShopPage.propTypes = {
  collections: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(ShopPage);
