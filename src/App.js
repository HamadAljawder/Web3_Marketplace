import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from './pages/Product';
import Varieties from './pages/Varieties';
import Account from './pages/Account';
import './App.css';
import OrderDetails from './pages/OrderDetails';
import Bidding from './pages/Bidding';
import FarmerRigestration from './pages/FarmerRegistration';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="product" element={<Product />} />
    <Route path="varieties" element={<Varieties />} />
    <Route path="/account" element={<Account />} />
    <Route path="/orderdetails" element={<OrderDetails />} />
    <Route path="/bidding" element={<Bidding />} />
    <Route path="/FarmerRegistration" element={<FarmerRigestration />} />
  </Routes>
);

export default App;
