import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';
import data from '../../data/data.json';
import './Home.scss'

const Home = ({products, setProducts}) => {
  const [category,setCategory] = useState([]);
  //selected category by user
  const [selectedCategory, setSelectedCategory] = useState();

  //to get unique categoris
  useEffect(() => {
    const getCategories = () => {
      const categories = data.products.map(product => product.category);
      const uniqueCategories = new Set(categories);
      setCategory([...uniqueCategories])
    }
    getCategories();
  },[data.products])

  //filter products by user selected category
  useEffect(() => {
    if(selectedCategory){
      const filteredProducts = data.products.filter(product => product.category === selectedCategory);
      setProducts(filteredProducts);
    }else{
      setProducts(data.products);
    }
  },[selectedCategory])

  return (
    <>
      <div className='products-container'>
        <div className="filter-products">
          <select name="categories" id="" onChange={(e) => setSelectedCategory(e.target.value)}>
            {
              category?.map(category => {
                return <option key={category}>{category}</option>
              })
            }
          </select>
        </div>
        <div className="wrapper">
          {
            products.map((product) => {
              return <Link key={product.id} to={`product-details/${product.id}`}>
                    <ProductCard product={product} />
                </Link>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home