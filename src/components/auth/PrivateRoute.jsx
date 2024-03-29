import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  const isAuth = useSelector(state => state.auth.isAuth);
  if (isAuth) {
    return <Route {...rest} render={props => <Component {...props} />}/>;
  } else {
    return <Redirect to='/'/>;
  }
};

export default PrivateRoute;