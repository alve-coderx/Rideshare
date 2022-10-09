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

const Layout = () => {
  return (
   <Routes>
    <Route path='/' element={<Entry/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/car/:id' element={<SingleCar/>}/>
    <Route path='/startsite' element={<Main/>}>
      <Route path='/startsite/search' element={<Search/>}/>
      <Route path='/startsite/map' element={<Map/>}/>
      <Route path='/startsite/cars' element={<CarList/>}/>
    </Route>
   </Routes>
  )
}

export default Layout