import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Yeh function user ko protected routes par jane se rokta hai agar woh authenticated nahi hai.
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
