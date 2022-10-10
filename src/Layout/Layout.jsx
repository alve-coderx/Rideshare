import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Entry from '../Pages/Entry/Entry'
import Login from '../Pages/Login/Login'
import Main from '../Pages/Main/Main'
import Map from '../Pages/Map/Map'
import Register from '../Pages/Register/Register'
import Search from '../Pages/Search/Search'
import CarList from '../Pages/CarList/CarList'
import SingleCar from '../Pages/SingleCar/SingleCar'
import UserProfile from '../Pages/Profile/UserProfile'
import Testominal from '../Pages/Testominal/Testominal'
import Message from '../Pages/Message/Message'
import Inbox from '../Pages/Message/Inbox/Inbox'
import OrderInfo from '../Pages/Confirm/OrderInfo'

const Layout = () => {
  return (
    <Routes>
      <Route path='/' element={<Entry />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/car/:id' element={<SingleCar />} />
      <Route path='/user/:id/testominal' element={<Testominal />} />
      <Route path='/user/:id/message' element={<Message />} />
      <Route path='/order/info' element={<OrderInfo />} />
      <Route path='/user/:id/inbox' element={<Inbox />} />
      <Route path='/startsite' element={<Main />}>
        <Route path='/startsite/search' element={<Search />} />
        <Route path='/startsite/user/:id' element={<UserProfile />} />
        <Route path='/startsite/map' element={<Map />} />
        <Route path='/startsite/cars' element={<CarList />} />
      </Route>
    </Routes>
  )
}

export default Layout