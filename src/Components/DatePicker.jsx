import React from 'react';
import { MdDateRange } from 'react-icons/md';
const DatePicker = ({color}) => {
  return (
    <div>
        <p style={{backgroundColor : color}} className={` lg:text-[14px] md:text-[12px] text-[12px] font-[600] flex items-center rounded-lg px-2 py-2 mt-2 lg:w-52 md:w-52 w-44`}><MdDateRange className='mr-1' /> Do. 23. Juni  14:00 - 17:00</p>
    </div>
  )
}

export default DatePicker