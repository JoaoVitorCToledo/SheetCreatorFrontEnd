import React from 'react';

class SignInPage extends React.Component {
  callSignUp(path) {
    this.props.history.push(path);
  }

  render () {
    return  <div class="nes-container with-title signin-container">
              <h1 class="title"> Sign In </h1>
              <div class="signin-template buttons-row-gap">
                <div class="login-area">
                  <label for="login_field">Login</label>
                  <input id="login_field" type="text" class="nes-input"/>
                </div>

                <div class="password-area">
                  <label for="password_field">Password</label>
                  <input id="password_field" type="password" class="nes-input"/>
                </div>

                <div class="signin-area">
                  <button class="nes-btn">Sign in</button>
                </div>
                <div class="signup-area">
                  <button class="nes-btn is-primary" onClick={() => this.callSignUp('/signup') }>Sign up</button>
                </div>
                <div class="forgotpassword-area">
                  <button class="nes-btn is-warning">Forgot your password ?</button>
                </div>
              </div>
            </div>
  }
}

export default SignInPage;
