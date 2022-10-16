import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children,...rest }) => {
    const user = {
      email : 'dsadsadd'
    }
    const location = useLocation()
    if(user.email){
      return children
    }
    return <Navigate to='/login' state={{from : location}}/>
  };

export default PrivateRoute;