import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Entry = () => {
  const style = {
    btn : 'border-t border-r border-b border-[white] text-[14px] font-[500] py-2 px-4 shadow w-[150px]'
  }
  return (
    <div className='text-center flex flex-col items-center' style={{height : '100vh',background : `url(https://i.ibb.co/Hhfj0Z6/main.png)`,backgroundRepeat : 'no-repeat',backgroundSize : 'cover'}} >
      <div className='pt-12 w-[306px]'>
        <p className="text-[40px] font-[600] leading-[48px]		">Search, Book and Rent Your Vehincle Easily</p>
      </div>
      <div className='absolute bottom-14'>
            <Link to='/register'>
              <button className={`${style.btn} bg-[white] text-[#0E0F11] rounded-l-xl`}>
                Register
              </button>
            </Link>
            <Link to='/login'>
              <button className={`${style.btn} bg-slate-700 text-white rounded-r-xl`}>
                Login
              </button>
            </Link>
      </div>
    </div>
  )
}

export default Entry