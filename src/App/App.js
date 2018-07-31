import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../HomePage';
import { Registration } from '../RegistrationPage';
import { Login } from '../LoginPage';

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Registration} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    );
  }
}
