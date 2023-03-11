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
  const [auth, setAuth] = useState(false);

  const isAuthenticated = (username, password) => {
    if(username === 'admin' && password === '1234') {
      setAuth(true);
    }
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
    <ShopContext.Provider value={{addToCart,removeFromCart, cartItems, auth, isAuthenticated}}>
        {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider