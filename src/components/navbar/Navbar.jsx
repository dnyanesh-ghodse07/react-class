import React, {useState, useEffect, useContext} from 'react'
import "./Navbar.scss"
import cart from '../../assets/shopping-cart.svg'
import data from '../../data/data.json';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';


const Navabar = ({products, setProducts}) => {
  const {cartItems, auth} = useContext(ShopContext);
  const navigate = useNavigate();
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


  const navigateToCart = () => {
    if(auth){
      navigate('/cart');
    }else{
      navigate('/login');
    }
  }

  return (
    <div className='nav'>
      <div className='brand'>
      <Link to={'/'}>
          <h1>Shopper</h1>
      </Link>
      </div>
      {window.location.pathname === '/' ? <div className='top'>
          <input className={`nav-search ${focus ? 'onFocus' : ''}`} onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} type="text" placeholder='Search' onChange={handleSearch} />
      </div> : <div></div>}
      <div className='cart'>
        <button onClick={navigateToCart}>
        <div>
          <h1 className='cart-icon'>{totalItems}</h1>
          <img src={cart} alt="" color='red'/>
        </div>
        </button>
      </div>
    </div>
  )
}

export default Navabar