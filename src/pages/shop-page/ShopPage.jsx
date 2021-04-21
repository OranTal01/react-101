import React, { Component, Fragment } from 'react';

import './shop-page.style.scss';

import SHOP_DATA from './shop-data';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <Fragment>
        {this.state.collections.map(collections => (
          <CollectionPreview key={collections.id} collections={collections} />
        ))}
      </Fragment>
    );
  }
}

export default ShopPage;
