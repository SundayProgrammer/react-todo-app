import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from '../HomePage';
import { Registration } from '../RegistrationPage';
import { Login } from '../LoginPage';
import { Tasks } from '../TasksPage';
import { history } from '../_helpers';
import { AuthenticatedRoute } from '../_components';

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Registration} />
          <Route path="/login" exact component={Login} />
          <AuthenticatedRoute component={Tasks} exact path="/tasks" />
        </Switch>
      </Router>
    );
  }
}
