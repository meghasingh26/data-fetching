import React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom'
import CarListing from '../pages/CarListing'
import carDetails from '../pages/carDetails'

const Routers =() => {
  return (
  <Routes>
    <Route path='/cars' element={<CarListing/>} /> 
    <Route path='/cars/:slug' element={<carDetails/>} />
    </Routes>
  );     
};
export default Routers;