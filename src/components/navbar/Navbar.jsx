import React, {useState, useEffect, useContext} from 'react'
import "./Navbar.scss"
import cart from '../../assets/shopping-cart.svg'
import data from '../../data/data.json';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';


const Navabar = ({products, setProducts}) => {
  const {cartItems} = useContext(ShopContext);
  console.log(cartItems);
  const totalItems = Object.values(cartItems).reduce((acc, item) => acc + item)
  const [inputText, setInputText] = useState('');
  const [focus, setFocus] = useState(false);
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
    <div className='nav'>
      
      <div className='brand'>
      <Link to={'/'}>
          <h1>Shopper</h1>
      </Link>
      </div>
      <div className='top'>
          <input className={`nav-search ${focus ? 'onFocus' : ''}`} onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} type="text" placeholder='Search' onChange={handleSearch} />
      </div>
      <div className='cart'>
        <Link to={'/cart'}>
        <div>
          <h1 className='cart-icon'>{totalItems}</h1>
          <img src={cart} alt="" color='red'/>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Navabar