import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/productCard/ProductCard';
import data from '../../data/data.json';
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setProducts(data.products);
  },[])

  const handleSearch = (e) => {
    setInputText(e.target.value);
  }

  useEffect(() => {
    if(inputText){
      const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(inputText.toLowerCase()));
      setProducts(filteredProducts);
    }else{
      setProducts(data.products);
    }
  },[inputText])

  return (
    <div>
      <div className='top'>
          <input className='search' type="text" placeholder='Search' onChange={handleSearch} />
      </div>
      <div className='products-container'>
        <div className="wrapper">
        {
          products.map((product) => {
            return <ProductCard key={product.id} product={product}/>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Home