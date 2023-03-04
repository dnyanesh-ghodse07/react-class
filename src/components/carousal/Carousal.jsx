import React, {useState} from 'react' 
import './Carousal.scss'

const Carousal = (props) => {
    const {images} = props;
    const [index, setIndex] = useState(0);
  return (
    <div>
      <div>
        <img src={images[index]} alt="" />
      </div>
      <button onClick={() => setIndex(prev => prev - 1)}>back</button>
      <button onClick={() => setIndex(prev => prev + 1)}>next</button>
    </div>
  )
}

export default Carousal