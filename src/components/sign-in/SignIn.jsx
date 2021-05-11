//dependencies
import React, { Component } from 'react';
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
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleOnSubmit = e => {
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    e.preventDefault();
    emailSignInStart({ email, password });
    this.props.history.push('/');
  };

  handleOnChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSignInWithGoogle = () => {
    const { googleSignInStart } = this.props;
    googleSignInStart();
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
            label='Email'
            required
            value={this.state.email}
          />
          <FormInput
            handleOnChange={this.handleOnChange}
            autoComplete='on'
            type='password'
            name='password'
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

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: ({ email, password }) =>
    dispatch(emailSignInStart({ email, password })),
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
