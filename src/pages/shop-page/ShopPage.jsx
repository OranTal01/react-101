//dependencies
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

//style
import './shop-page.style.scss';

//components
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';

//pages
import CollectionPage from '../collection-page/CollectionPage';

const ShopPage = ({ match }) => {
  return (
    <Fragment>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </Fragment>
  );
};

export default ShopPage;
