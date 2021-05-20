//dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

//style
import './sign-in.style.scss';

//components
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

//actions
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
const SignIn = ({ emailSignInStart, history, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailSignInStart({ ...userCredentials });
    history.push('/');
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSignInWithGoogle = () => {
    googleSignInStart();
    history.push('/');
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          handleOnChange={handleOnChange}
          autoComplete='on'
          type='text'
          name='email'
          label='Email'
          required
          value={email}
        />
        <FormInput
          handleOnChange={handleOnChange}
          autoComplete='on'
          type='password'
          name='password'
          label='Password'
          required
          value={password}
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton
            type='button'
            onClick={handleSignInWithGoogle}
            isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: ({ email, password }) =>
    dispatch(emailSignInStart({ email, password })),
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
