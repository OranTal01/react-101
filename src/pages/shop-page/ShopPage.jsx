//dependencies
import React, { useEffect, lazy, Suspense, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

//style
import './shop-page.style.scss';

//components
import Spinner from '../../components/spinner/Spinner';
const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/CollectionsOverview'),
);
const CollectionPageContainer = lazy(() =>
  import('../collection-page/CollectionPage'),
);

export const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
