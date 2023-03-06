import './App.scss';
import Home from './pages/Home/Home';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import data from './data/data.json';
import ProductDetails from './pages/productDetails/ProductDetails';
import Navabar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.products);
  }, [data.products])
  return (
    <div className="App">
      <Navabar products={products} setProducts={setProducts} />
      <Routes>
        <Route path='/' element={<Home products={products} setProducts={setProducts}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product-details/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer/>  
    </div>
  );
}

export default App;
