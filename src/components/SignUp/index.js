import React from 'react';

const SignUpPage = () => (
  <div class="nes-container with-title">
    <h1 class="title"> Sign In </h1>
    <div class="nes-field">
      <input type="text" id="name_field" class="nes-input"/>>
    </div>
    <button class="nes-btn">OI</button>

    <div id="inputs" class="item"><div class="nes-field">
      <label for="name_field">Your name</label>
      <input type="text" id="name_field" class="nes-input"/>
    </div>

    <div class="nes-field is-inline">
      <label for="inline_field">.input.is-success</label>
      <input type="text" id="inline_field" class="nes-input is-success" placeholder="NES.css"/>
    </div>

    <div class="nes-field is-inline">
      <label for="warning_field">.input.is-warning</label>
      <input type="text" id="warning_field" class="nes-input is-warning" placeholder="8bit.css"/>
    </div>

    <div class="nes-field is-inline">
      <label for="error_field">.input.is-error</label>
      <input type="text" id="error_field" class="nes-input is-error" placeholder="awesome.css"/>
    </div></div>
  </div>
);

export default SignUpPage;
