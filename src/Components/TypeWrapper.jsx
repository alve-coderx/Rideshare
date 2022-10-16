import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';

const TypeWrapper = ({ title, style, placeholder, icon,preFixIcon }) => {
  return (
    <div className='relative'>
      <p className={style.boldText}>{title}</p>
      {
        preFixIcon &&
        <AiOutlineMail className='absolute top-3 left-4 text-[#636B75]' />

      }
      <input id="message" rows="4" className={`${style.input} pl-10`} placeholder={placeholder} />
      {
        icon && <RiCheckboxBlankCircleLine className='absolute text-[#7D7AFF] right-2 top-10' />
      }
    </div>
  )
}

export default TypeWrapper;