import React from 'react'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'

const TypeFeild = ({title,style,placeholder}) => {
  return (
    <div className='relative'>
      <p className={style.boldText}>{title}</p>
      <input id="message" rows="4" className={style.input} placeholder={placeholder} />
      <RiCheckboxBlankCircleLine className='absolute text-[#7D7AFF] right-2 top-10' />
    </div>
  )
}

export default TypeFeild