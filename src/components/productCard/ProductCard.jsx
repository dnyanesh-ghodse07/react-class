import React from 'react'
// import Carousal from '../carousal/Carousal';
import './ProductCard.css'

const ProductCard = (props) => {
    const { title, thumbnail, brand, price } = props.product;
    return (
        <div className='product-card'>
            <img src={thumbnail} alt="" />
            {/* <Carousal images={images} /> */}
            <div className='product-details'>
            <h1 className='product-price'>${price}</h1>
            <h1 className='product-title'>{title}</h1>
            <p>{brand}</p>
            </div>
        </div>
    )
}

export default ProductCard