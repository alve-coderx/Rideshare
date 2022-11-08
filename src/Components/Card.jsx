import React from 'react';
import hies from '../assets/hies.png';
import { useState } from 'react';
const Card = ({index}) => {
  const [active, setActive] = useState();
  const clickHandler = (index) => {
    setActive((prev) => {
      return prev === index ? null : index;
    });

  };
  return (
    <div onClick={() => clickHandler(index)} className={active === index ? 'bg-[white] w-20 rounded-xl shadow-2xl lg:w-32 lg:h-28 h-20 w-20 ' : 'bg-[#7D7AFF] lg:w-32 lg:h-28 h-20 w-20 rounded-xl '}>
      <img src={hies}/>
    </div>
  )
}

export default Card