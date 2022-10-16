import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CarList, CreateCar, CreateRent, Entry, FinishedPage, Inbox, Login, Main, Map, Message, MyCars, OrderInfo, Paying, PrivateRoute, Register, RentalContract, RentalDetails, RentalDoc, Rentals, RentalSign, Search, SingleCar, Testominal, UserProfile } from '../Pages';
import PasswordReset from '../Pages/PasswordReset/PasswordReset';
import LandlordOverView from '../Pages/Rentals/RentalOverView/LandlordOverView';

const Layout = () => {
  return (
    <Routes>
      <Route path='/' element={<Entry />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/startsite' element={<Main />}>
        <Route path='/startsite/search' element={<PrivateRoute><Search /></PrivateRoute>} />
        <Route path='/startsite/user/:id' element={<UserProfile />} />
        <Route path='/startsite/map' element={<Map />} />
        <Route path='/startsite/cars' element={<CarList />} />
        <Route path='/startsite/mycars' element={<MyCars />} />
        <Route path='/startsite/rentals' element={<Rentals />} />
      </Route>
      <Route path='/car/:id' element={<SingleCar />} />
      <Route path='/user/:id/testominal' element={<Testominal />} />
      <Route path='/rental/overview' element={<LandlordOverView />} />
      <Route path='/passwordreset' element={<PasswordReset />} />
      <Route path='/user/:id/message' element={<Message />} />
      <Route path='/order/info' element={<OrderInfo />} />
      <Route path='/order/payment' element={<Paying />} />
      <Route path='/user/:id/inbox' element={<Inbox />} />
      <Route path='/createcar' element={<CreateCar />} />
      <Route path='/rent/:id' element={<RentalDetails />} />
      <Route path='/create/rent' element={<CreateRent />} />
      <Route path='/rental/start' element={<FinishedPage />} />
      <Route path='/rental/documents' element={<RentalDoc />} />
      <Route path='/rental/contract' element={<RentalContract />} />
      <Route path='/rental/sign' element={<RentalSign />} />

    </Routes>
  )
}

export default Layout