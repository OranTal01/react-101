//dependencies
import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';

//style
import './shop-page.style.scss';

//components
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';

//actions
import { setCollections } from '../../redux/shop/shop.actions';
//pages
import CollectionPage from '../collection-page/CollectionPage';

//firestor
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCollections } = this.props;

    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      setCollections(collectionsMap);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCollections: collections => dispatch(setCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
