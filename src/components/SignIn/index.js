import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  callPath(path) {
    this.props.history.push(path);
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div class="nes-container with-title signin-container">
        <h1 class="title"> Sign In </h1>
        <form onSubmit={this.onSubmit} class="signin-template buttons-row-gap">
          <div class="login-area">
            <label for="login_field">E-mail</label>
            <input
              id="login_field"
              name="email"
              class="nes-input"
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
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
          </div>

          <div class="signin-area">
            <button class="nes-btn" disabled={isInvalid} type="submit">
              Sign In
            </button>
          </div>
          <div class="signup-area">
            <button class="nes-btn is-primary" onClick={() => this.callPath('/signup') }>Sign up</button>
          </div>
          <div class="forgotpassword-area">
            <button class="nes-btn is-warning">Forgot your password ?</button>
          </div>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
