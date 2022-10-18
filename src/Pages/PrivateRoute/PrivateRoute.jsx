import React from 'react';
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useSupplier  from '../../Hook/useSupplier'
const PrivateRoute = ({ children,...rest }) => {
    const {user} = useSupplier()
    const location = useLocation()
    
    if(user?.email){
      return children
    }
    return <Navigate to='/login' state={{from : location}}/>
  };

export default PrivateRoute;