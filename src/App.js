import './App.scss';
import React, { useEffect, useState, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import data from './data/data.json';
import ShopContextProvider from './context/ShopContext';
//dynamic importing
const ProductDetails = React.lazy(() => import('./pages/productDetails/ProductDetails'));
const Cart = React.lazy(() => import('./pages/Cart/Cart'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Navabar = React.lazy(() => import('./components/navbar/Navbar'));
const Footer = React.lazy(() => import('./components/footer/Footer'));
const Login = React.lazy(() => import('./pages/Login/Login'));


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.products);
  }, [data.products])

  return (
    <div className="App">
      <ShopContextProvider>
        <Navabar products={products} setProducts={setProducts} />
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home products={products} setProducts={setProducts} />
            </Suspense>
          } />
          <Route path='/cart' element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Cart />
            </Suspense>
          } />
          <Route path='/product-details/:id' element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <ProductDetails />
            </Suspense>
          } />
          <Route path='/login' element={<Suspense fallback={<h1>Loading...</h1>}>
            <Login />
          </Suspense>} />
        </Routes>
        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
