//dependencies
import React, { useEffect, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// styles
import './App.css';

//actions
import { checkUserSession } from './redux/user/user.actions';

//firebase
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// selectors memorization
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForOverview } from './redux/shop/shop.selectors';

// components
import Navbar from './components/navbar/Navbar';
import Spinner from './components/spinner/Spinner';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

const HomePage = lazy(() => import('./pages/home-page/Home'));
const ShopPage = lazy(() => import('./pages/shop-page/ShopPage'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up-page/SignInAndSignUpPage'),
);
const CheckoutPage = lazy(() => import('./pages/checkout-page/CheckoutPage'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route
                exact
                path='/sign-in'
                render={() =>
                  currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </Router>
    </div>
  );
};

// App.propTypes = {
//   setCurrentUser: PropTypes.func.isRequired,
// };

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  collections: selectCollectionsForOverview(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
