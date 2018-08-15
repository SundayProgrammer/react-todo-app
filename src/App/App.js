import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { Home } from '../HomePage';
import { Registration } from '../RegistrationPage';
import { Login } from '../LoginPage';
import { Tasks } from '../TasksPage';
import { AuthenticatedRoute, UnauthenticatedRoute } from '../_components';

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <UnauthenticatedRoute path="/" exact component={Home} />
          <UnauthenticatedRoute path="/signup" exact component={Registration} />
          <UnauthenticatedRoute path="/login" exact component={Login} />
          <AuthenticatedRoute component={Tasks} exact path="/tasks" />
          <UnauthenticatedRoute component={Home} />
        </Switch>
      </Router>
    );
  }
}
