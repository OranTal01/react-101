import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './sign-in.style.scss';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import { withRouter } from 'react-router';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleOnSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleOnChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSignInWithGoogle = () => {
    signInWithGoogle();
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleOnSubmit}>
          <FormInput
            handleOnChange={this.handleOnChange}
            autoComplete='on'
            type='text'
            name='email'
            id='email'
            label='Email'
            required
            value={this.state.email}
          />
          <FormInput
            handleOnChange={this.handleOnChange}
            autoComplete='on'
            type='password'
            name='password'
            id='password'
            label='Password'
            required
            value={this.state.password}
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton
              type='button'
              onClick={this.handleSignInWithGoogle}
              isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SignIn);
