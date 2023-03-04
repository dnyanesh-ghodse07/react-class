import React from 'react'
import "./ProductDetails.scss"
import {useParams} from 'react-router-dom';
import data from '../../data/data.json';

const ProductDetails = () => {
const {id} = useParams();
const Product = data.products.filter((product) => product.id == id);
const {brand,title,images,category,description,discountPercentage,price,rating,stock} = Product[0];
  return (
    <div className='product-details'>
       <div className="product-img">
            <img src={images[0]} alt="" />
       </div>
       <div className="product-description">
         <h2 className='brand'>{brand} <span className='category'>{category}</span></h2>
         <p className='title'>{title}</p>
         <p className='desc'>{description}</p>
         <h2 className='price'>$ {price} <span className='discount'>{discountPercentage}%</span></h2>
         <p>Rating: {rating}</p>
       </div>
    </div>
  )
}

export default ProductDetails