import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const AuthenticatedRoute = ({ component: C, ...rest }) => {
  return <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <C {...props} />
      : <Redirect to={{ pathName='/login', state={ from: props.location } }}
  )};
}
