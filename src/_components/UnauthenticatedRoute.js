import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ErrorBoundary } from '../_components';

export const UnauthenticatedRoute = ({ component: C, ...rest }) => {
  return (
    <ErrorBoundary>
      <Route {...rest} render={() => {

      }} />
    </ErrorBoundary>
  );
}
