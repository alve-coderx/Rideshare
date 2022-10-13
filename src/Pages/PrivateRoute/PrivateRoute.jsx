import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useSupplier from '../../Hook/useSupplier';

const PrivateRoute = ({ children,...rest }) => {
    const { user } = useSupplier();
    console.log(user)
    const location = useLocation()
    if(user.email){
      return children
    }
    return <Navigate to='/login' state={{from : location}}/>
  };

export default PrivateRoute;