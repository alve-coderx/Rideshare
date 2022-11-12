import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Entry = () => {
  const style = {
    btn : 'border-t border-r border-b border-[white] text-[19px] font-[500] py-4 px-4 shadow w-[150px] font-[700]'
  }
  return (
    <div className='text-center flex flex-col items-center lg_bg sm_bg md_bg' style={{height : '100vh'}} >
      <div className='pt-12 w-[306px] lg:w-[600px]'>
        <p className="lg:text-[50px] text-[40px] font-[600] leading-[60px]	">Search, Book and Rent Your Vehincle Easily</p>
      </div>
      <div className='absolute bottom-14'>
            <Link to='/register'>
              <button className={`${style.btn} bg-[white] text-[#0E0F11] rounded-l-xl x`}>
                Register
              </button>
            </Link>
            <Link to='/login'>
              <button className={`${style.btn} bg-slate-700 text-white rounded-r-xl `}>
                Log-in
              </button>
            </Link>
      </div>
    </div>
  )
}

export default Entry