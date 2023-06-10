import React from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsList from '../components/products/ProductsList';
import ProductDetail from '../components/products/ProductDetails';
import { ProductAddForm } from "../components/products/ProductAddForm";
import { ProductEditForm } from "../components/products/ProductEditForm";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <header>
        <h1>Products Manager</h1>
      </header>
      <Routes>
        <Route path="/" element={<ProductsList/>}></Route>
        <Route path="/products/:id" element={<ProductDetail/>}></Route>
        <Route path="/products/add" element={<ProductAddForm/>}></Route>
        <Route path="/products/edit/:id" element={<ProductEditForm/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
