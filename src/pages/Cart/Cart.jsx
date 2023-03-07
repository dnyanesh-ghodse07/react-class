import React, { useContext } from 'react'
import "./Cart.scss"
import data from '../../data/data.json';
import { ShopContext } from '../../context/ShopContext';
import CartItems from '../../components/cartItems/CartItems';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);
  const cartProducts = data.products.filter(product => cartItems[product.id] !== 0)
  console.log(cartProducts);

  const totalCartPrice = cartProducts.map(product => Number(cartItems[product.id]) * Number(product.price));
  const totalCartD = cartProducts.map(product => cartItems[product.id] * product.discountPercentage);
  
  return (
    <div className='cart-page'>
      <div className="cart-page-top">
        <h1>Your Cart</h1>
      </div>
      <div className="cart-main">
        <div className='cart-products'>
          {
            data.products.map(product => {
              if (cartItems[product.id] !== 0) {
                return <CartItems product={product} cartItems={cartItems} />
              }
              return null
            })
          }
        </div>
        <div className="checkout-box">
          <div className="cart-summary">
            <h1>Cart Summary</h1>
          </div>
          <hr />
          <div className='price-detail'>
            <p>Price : $ {totalCartPrice }</p>
            <p>Discount: {totalCartD } %</p>
            <p>Delivery Charges : Free</p>
          </div>
          <hr />
          <div className="total-cart-value">
            <h1>Total Amount : $ { totalCartPrice}</h1>
          </div>
          <hr />
        <div className="buy-btn">
          <button>Proceed To Buy</button>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Cart