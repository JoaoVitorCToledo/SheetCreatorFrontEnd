import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  callPath(path) {
    this.props.history.push(path);
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div class="nes-container with-title signup-container">
        <h1 class="title"> Sign Up </h1>
        <form onSubmit={this.onSubmit} class="signup-template buttons-row-gap">
          <div class="name-area">
            <label for="name_field">Name</label>
            <input
              id="name_field"
              class="nes-input"
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div class="login-area">
            <label for="login_field">Login</label>
            <input id="login_field" placeholder="Login" type="text" class="nes-input"/>
          </div>
          <div class="email-area">
            <label for="email_field">E-mail</label>
            <input
              id="email_field"
              class="nes-input"
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div class="password-area">
            <label for="password_field">Password</label>
            <input
              id="password_field"
              class="nes-input"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="confirmation-area">
            <label for="password_confirmation_field">Password Confirmation</label>
            <input
              id="password_field"
              class="nes-input"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div class="signup-area">
            <button class="nes-btn is-success" disabled={isInvalid} type="submit">
              Sign up
            </button>
          </div>
          <div class="cancel-area">
            <button class="nes-btn" onClick={() => this.callPath('/signin') }>Cancel</button>
          </div>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase)

export default SignUpPage;

export { SignUpForm, SignUpLink };
