import React from 'react';

class SignUpPage extends React.Component {
  callSignUp(path) {
    this.props.history.push(path);
  }

  render () {
    return  <div class="nes-container with-title login-size">
              <h1 class="title"> Sign Up </h1>
              <div class="item">
                <label for="name_field">Name</label>
                <input id="name_field" type="text" class="nes-input"/>
                <label for="login_field">Login</label>
                <input id="login_field" type="text" class="nes-input"/>
                <label for="email_field">E-mail</label>
                <input id="email_field" type="text" class="nes-input"/>
                <label for="password_field">Password</label>
                <input id="password_confirmation_field" type="password" class="nes-input"/>
                <label for="password_confirmation_field">Password Confirmation</label>
                <input id="password_field" type="password" class="nes-input"/>
              </div>
              <div class="item">
                <button class="nes-btn is-success">Sign up</button>
                &nbsp;
                <button class="nes-btn" onClick={() => this.callSignUp('/signin') }>Cancel</button>
              </div>
            </div>
  }
}

export default SignUpPage;
