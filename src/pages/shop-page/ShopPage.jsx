//dependencies
import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//style
import './shop-page.style.scss';

//components
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Spinner from '../../components/spinner/Spinner';

//actions
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

//pages
import CollectionPage from '../collection-page/CollectionPage';

//selectors
import {
  selectIsFetchingCollections,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors.js';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);
class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetching, isCollectionsLoaded } = this.props;
    return (
      <Fragment>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: selectIsFetchingCollections(state),
  isCollectionsLoaded: selectIsCollectionsLoaded(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
