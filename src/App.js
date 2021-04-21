import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home-page/Home';
import ShopPage from './pages/shop-page/ShopPage';
import Navbar from './components/navbar/Navbar';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' component={SignInAndSignUpPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
