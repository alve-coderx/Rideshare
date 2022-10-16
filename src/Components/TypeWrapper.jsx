import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';

const TypeWrapper = ({ title, style, placeholder, icon }) => {
  return (
    <div className='relative'>
      <p className={style.boldText}>{title}</p>
     
      <input onChange={(e) => console.log(e.target.value)} id="message" rows="4" className={`${style.input} pl-10`} placeholder={placeholder} />
      {
        icon && <RiCheckboxBlankCircleLine className='absolute text-[#7D7AFF] right-2 top-10' />
      }
    </div>
  )
}

export default TypeWrapper;