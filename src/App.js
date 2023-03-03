import { useEffect, useReducer } from 'react';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  // const [state,dispatch] = useReducer((state,action) => {
  //   switch(action.type) {
  //     case 'SET_NAME':
  //       return {...state, name: action.payload}
  //     case 'GET_POSTS':
  //       return {...state, posts: action.payload}
  //     case 'GET_PHOTOS':
  //       return {...state, photos: action.payload}
  //     default:
  //       return state;
  //   }
  // },{
  //   name: '',
  //   posts: [],
  //   photos: [],
  // });

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
