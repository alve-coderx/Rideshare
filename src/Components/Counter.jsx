import React from 'react';
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const style = {
    secondary: 'flex items-center text-[#636B75] text-[13px] font-[600] rounded-lg bg-white px-2',
    heading: 'text-[#838D95] text-[15px] font-[800]',

  }

const Counter = ({name}) => {
    const [num, setNum] = useState(0);

    let incNum = () => {
        if (num < 10) {
            setNum((prevCount) => prevCount + 1);
        }
    };
    let decNum = (id) => {
        if (num > 0) {
            setNum((prevCount) => prevCount - 1);
        }
    }
    return (

        <div className='flex justify-between p-3 mt-2 '>
            <p className={style.heading}>{name}</p>
            <p className={style.secondary}><AiOutlineMinus onClick={() => decNum(1)} className='mr-5 text-black text-[18px]' /> <span className='text-[20px] text-[#7D7AFF]'>{num}</span>  <AiOutlinePlus onClick={incNum} className='ml-5 text-black text-[18px]' /></p>
        </div>
    )
}

export default Counter