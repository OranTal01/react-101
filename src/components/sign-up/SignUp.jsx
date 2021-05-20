import React, { useState } from 'react';

//style
import './sign-up.style.scss';

//components
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { withRouter } from 'react-router';

//actions
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignUp = ({ signUpStart, history }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ email, password, displayName });

    setUserCredentials({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    history.push('/');
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleOnChange={handleOnChange}
          autoComplete='on'
          type='text'
          name='displayName'
          label='User Name'
          required
          value={displayName}
        />
        <FormInput
          handleOnChange={handleOnChange}
          autoComplete='on'
          type='email'
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
        <FormInput
          handleOnChange={handleOnChange}
          autoComplete='on'
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          required
          value={confirmPassword}
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
