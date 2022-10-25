import React from 'react';
import { Outlet } from 'react-router-dom';
import {Navigator} from '../../Components';
const Main = () => {
  return (
    <div>
      <Navigator/>
      <Outlet />
    </div>
  )
}

export default Main