import { createContext, useState } from 'react'
import data from '../data/data.json';

export const ShopContext = createContext(null);

const ShopContextProvider = ({children}) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < data.products.length +1 ; i++) {
      cart[i] = 0;
    }
    return cart;
  }

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return ({...prev, [itemId]: Number(prev[itemId]) + 1})
    })
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  return (
    <ShopContext.Provider value={{addToCart,removeFromCart, cartItems}}>
        {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider