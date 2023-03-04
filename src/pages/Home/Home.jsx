import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navabar from '../../components/navbar/Navbar';
import ProductCard from '../../components/productCard/ProductCard';
import data from '../../data/data.json';
import './Home.scss'

const Home = ({products}) => {
  return (
    <>
      <div className='products-container'>
        <div className="wrapper">
          {
            products.map((product) => {
              return <Link to={`product-details/${product.id}`}><ProductCard key={product.id} product={product} /></Link>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home