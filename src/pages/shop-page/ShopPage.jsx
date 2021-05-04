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
import { setCollections } from '../../redux/shop/shop.actions';

//pages
import CollectionPage from '../collection-page/CollectionPage';

//firestor
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);
class ShopPage extends Component {
  //short state
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCollections } = this.props;

    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      setCollections(collectionsMap);
      this.setState({ loading: false });
    });

    //option 2 with promise

    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   setCollections(collectionsMap);
    //   this.setState({ loading: false });
    // })

    // option 3 with fetch
    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/crwn-db-7414b/databases/(default)/documents/collections',
    // )
    //   .then(response => response.json())
    //   .then(collections => console.log(collections));
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <Fragment>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCollections: collections => dispatch(setCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
