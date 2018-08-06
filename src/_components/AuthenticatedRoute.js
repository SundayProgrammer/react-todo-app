import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ErrorBoundary } from '../_components';

export const AuthenticatedRoute = ({ component: C, ...rest }) => {
  return (
    <ErrorBoundary>
      <Route {...rest} render={props => {
        return (
          localStorage.getItem('user')
          ? <C {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        );
      }} />
    </ErrorBoundary>
  );

}
