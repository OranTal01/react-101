import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// styles
import './App.css';

// components
import HomePage from './pages/home-page/Home';
import ShopPage from './pages/shop-page/ShopPage';
import Navbar from './components/navbar/Navbar';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';

// actions
import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// selectors memorization
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/sign-in'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
