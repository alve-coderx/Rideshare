import React from 'react';
import { MdDateRange } from 'react-icons/md';
const DatePicker = ({color}) => {
  return (
    <div>
        <p style={{backgroundColor : color}} className={` text-[10px] text-[400] flex items-center rounded-lg px-2 py-2 mt-2 w-40 `}><MdDateRange className='mr-1' /> Do. 23. Juni  14:00 - 17:00</p>
    </div>
  )
}

export default DatePicker