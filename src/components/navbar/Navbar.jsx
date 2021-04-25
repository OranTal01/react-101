import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './navbar.style.scss';
import { auth } from '../../firebase/firebase.utils';

const Navbar = ({ currentUser }) => {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className='navbar'>
      <div className='logo-container'>
        <Link to='/'>
          <Logo className='logo' />
        </Link>
      </div>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/contact' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={handleSignOut}>
            SIGN OUT
          </div>
        ) : (
          <Link to='/sign' className='option'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  currentUser: PropTypes.any,
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navbar);
