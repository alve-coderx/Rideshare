import React from 'react';
import { MdDateRange } from 'react-icons/md';
const DatePicker = ({color}) => {
  return (
    <div>
        <input style={{backgroundColor : color}} className={` lg:text-[14px] md:text-[12px] text-[12px] font-[600] flex items-center outline-0 rounded-lg lg:w-52 md:w-52 w-44`} type='datetime-local'/>
    </div>
  )
}

export default DatePicker