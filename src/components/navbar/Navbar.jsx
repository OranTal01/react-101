import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//logo
import { ReactComponent as Logo } from '../../assets/crown.svg';

// style
import './navbar.style.scss';

//firebase
import { auth } from '../../firebase/firebase.utils';

// components
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

const Navbar = ({ currentUser, hideCartDropdown }) => {
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
          <Link to='/sign-in' className='option'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hideCartDropdown && <CartDropdown />}
    </div>
  );
};

Navbar.propTypes = {
  currentUser: PropTypes.any,
  hideCartDropdown: PropTypes.bool.isRequired,
};

const mapStateToProps = ({
  user: { currentUser },
  cart: { hideCartDropdown },
}) => ({
  currentUser,
  hideCartDropdown,
});

export default connect(mapStateToProps)(Navbar);
