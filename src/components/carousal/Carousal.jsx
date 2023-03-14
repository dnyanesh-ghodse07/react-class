import React, {useState} from 'react' 
import {ArrowRight,ArrowLeft} from 'react-feather'
import './Carousal.scss'

const Carousal = (props) => {
    const {images} = props;
    const [index, setIndex] = useState(0);
  return (
    <div>
      <div>
        <img src={images[index]} alt="" />
      </div>
      <button onClick={() => setIndex(prev => index > 0 ? prev - 1 : images.length - 1)}><ArrowLeft/></button>
      <button onClick={() => setIndex(prev => index < images.length - 1 ? prev + 1 : 0)}><ArrowRight /></button>
    </div>
  )
}

export default Carousal