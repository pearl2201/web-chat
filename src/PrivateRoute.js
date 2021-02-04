import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = rest;

  return (
    <Route
{...rest}
render={props => (

      (isAuthenticated) ? (

         <Component {...props} />

      ) : (

        <Redirect
to={{
          pathname: '/login',
          state: { from: props.location }
        }}
        />

      )

    )}
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

 const mapStateToProps = (state, _ownProps) => ({
     isAuthenticated: state.client.authenticated
  });

export default connect(mapStateToProps, null, null, {
  pure: false,
})(PrivateRoute);
