import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Home } from '../HomePage';
import { Registration } from '../RegistrationPage';
import { Login } from '../LoginPage';
import { Tasks } from '../TasksPage';
import { history } from '../_helpers';

export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Registration} />
          <Route path="/login" exact component={Login} />
          <Route path="/tasks" exact component={Tasks} />
        </Switch>
      </Router>
    );
  }
}
