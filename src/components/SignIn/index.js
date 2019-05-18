import React from 'react';

const SignUpPage = () => (
  <div class="nes-container with-title login-size">
    <h1 class="title"> Sign In </h1>
      <div class="item">
        <label for="login_field">Login</label>
        <input id="login_field" type="text" class="nes-input"/>
        <label for="password_field">Password</label>
        <input id="password_field" type="text" class="nes-input"/>
      </div>
      <div class="item">
        <button class="nes-btn">Sign in</button>
        &nbsp;
        <button class="nes-btn is-primary">Sign up</button>
        &nbsp;
        <button class="nes-btn is-warning">Forgot your password ?</button>
      </div>
  </div>
);

export default SignUpPage;
