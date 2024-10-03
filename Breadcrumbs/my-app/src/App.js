import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './components/home';
import ProductListing from './components/product-listing';
import ProductDetails from './components/product-details';
import { useEffect, useState } from 'react';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  // 'https://dummyjson.com/products'

  const [trendingProducts,setTrendingProducts]=useState([])

  useEffect(()=>{
    fetch("https://dummyjson.com/products").then(res=>res.json()).then((res)=>{
      const sliceTrending=res.products.slice(0,6);
    setTrendingProducts(sliceTrending);
    })
  },[])
  return (
    <BrowserRouter>
    <div className="App">
      <Breadcrumbs/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductListing/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
