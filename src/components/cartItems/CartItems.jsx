import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import "./CartItems.scss"
const CartItems = ({product,cartItems}) => {
    const {removeFromCart, addToCart} = useContext(ShopContext);
    const {thumbnail, id, price, discountPercentage,title} = product;

    return (
        <div className='cart-items'>
            <div className="cart-item-img">
                    <img src={thumbnail} alt="" />
            </div>
            <div className="cart-item-details">
                <div className="cart-item-name">
                    <h1>{title}</h1>
                </div>
                <div className="cart-item-price">
                    <h2 className='price'>$ {cartItems[id] * price}</h2>
                    <h3 className='discount'>% {discountPercentage}</h3>
                </div>
                <div className="btns">
                    <button className='add-btn' onClick={() => addToCart(id)}>+</button>
                    <h3>{cartItems[id]}</h3>
                    <button className='remove-btn' onClick={() => removeFromCart(id)}>-</button>
                </div>
            </div>
        </div>

    )
}

export default CartItems