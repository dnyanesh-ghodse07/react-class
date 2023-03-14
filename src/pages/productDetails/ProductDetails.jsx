import React, { useContext } from 'react'
import "./ProductDetails.scss"
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import { ShopContext } from '../../context/ShopContext';
import Carousal from '../../components/carousal/Carousal';


const ProductDetails = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { id } = useParams();
  const Product = data.products.filter((product) => product.id == id);
  const { brand, title, images, category, description, discountPercentage, price, rating, stock } = Product[0];
  return (
    <div className='product-details'>
      <div className="product-details-wrapper">
        <div className="product-img">
          <Carousal images={images}/>
        </div>
        <div className="product-description">
          <h2 className='brand'>{brand} <span className='category'>{category}</span></h2>
          <p className='title'>{title}</p>
          <p className='desc'>{description}</p>
          <h2 className='price'>${price} <span className='discount'>{discountPercentage}%</span></h2>
          <p>Rating: {rating}</p>
          <div className="add-to-cart">
            <button className='btn' onClick={() => addToCart(Number(id))}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails