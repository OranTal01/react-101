import React, { Component } from 'react';

//style
import './sign-up.style.scss';

//components
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { withRouter } from 'react-router';

//actions
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
class SignUp extends Component {
  constructor(props) {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = (e) => {
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ email, password, displayName });

    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    this.props.history.push('/');
  };

  handleOnChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleOnChange={this.handleOnChange}
            autoComplete='on'
            type='text'
            name='displayName'
            label='User Name'
            required
            value={displayName}
          />
          <FormInput
            handleOnChange={this.handleOnChange}
            autoComplete='on'
            type='email'
            name='email'
            label='Email'
            required
            value={email}
          />
          <FormInput
            handleOnChange={this.handleOnChange}
            autoComplete='on'
            type='password'
            name='password'
            label='Password'
            required
            value={password}
          />
          <FormInput
            handleOnChange={this.handleOnChange}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
