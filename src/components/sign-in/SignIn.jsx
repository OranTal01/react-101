import React, { Component } from 'react';

import './sign-in.style.scss';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

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

  render() {
    return (
      <div className='sign-in'>
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
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
