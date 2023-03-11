import React, {useContext, useState} from 'react'
import "./Login.scss"
import { ShopContext } from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
    const {isAuthenticated,auth} = useContext(ShopContext);
    
    
    const handleLogin = () =>{
        if(!username){
            alert('Please enter a username')
        }else if(!password){
            alert('Please enter a password')
        }else{
            isAuthenticated(username, password);
            if(auth){
                navigate('/cart');
            }else{
                setError('Wrong username or password')
            }
        }
    }

  return (
    <div className='login-container'>
        <div className="login">
            <div className='error'>
                   {error}
            </div>
            <div className="username">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='User Name'onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="password">
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="btn">
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login