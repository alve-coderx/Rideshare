import React from 'react';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';

const TypeWrapper = ({ title, style, placeholder, icon, text }) => {
  return (
    <div className='relative'>
      <p className='text-black text-[13px] font-[600] mt-3'>{title}</p>

      <input onChange={(e) => console.log(e.target.value)} id="message" rows="4" className={`${style.input} `} placeholder={placeholder} />
      {
        icon && <RiCheckboxBlankCircleLine className='absolute text-[#7D7AFF] right-2 top-10' />
      }
      {
        text && <p className={style.text}>{text}</p>
      }
    </div>
  )
}

export default TypeWrapper;