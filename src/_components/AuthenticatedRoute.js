import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ErrorBoundary } from "../_components";
import { servicesConstants } from "../_constants";

export const AuthenticatedRoute = ({ component: C, ...rest }) => {
  return (
    <ErrorBoundary>
      <Route
        {...rest}
        render={props => {
          return localStorage.getItem(servicesConstants.AUTH_TOKEN) ? (
            <C {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }}
      />
    </ErrorBoundary>
  );
};
