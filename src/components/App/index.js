import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

import {
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';
import '../../../node_modules/nes.css/css/nes.css'
import '../../stylesheet/custom.css'
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import CharacterSheet from '../CharacterSheet'
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <html>
        <Router>
          <head>
            <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"/>
          </head>
          <body>
            <Navigation authUser={this.state.authUser} />

            <hr />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.CHARACTER_SHEET} component={CharacterSheet} />
            {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
          </body>
        </Router>
      </html>
    );
  }
}

export default withFirebase(App);
