import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ErrorBoundary } from "../_components";

export const UnauthenticatedRoute = ({
  component: C,
  props: cProps,
  ...rest
}) => {
  return (
    <ErrorBoundary>
      <Route
        {...rest}
        render={props => {
          return localStorage.getItem("user") ? (
            <Redirect to="/tasks" />
          ) : (
            <C {...props} {...cProps} />
          );
        }}
      />
    </ErrorBoundary>
  );
};
