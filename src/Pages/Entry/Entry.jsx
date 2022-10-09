import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Entry = () => {
  const [toggle, setToggle] = useState(null);
  const clickHandler = (index) => {
    setToggle((prev) => {
      return prev === index ? null : index;
    });

  };
  const refs = [
    { name: "Register", href: '/register', id: 1 },
    { name: "Login", href: '/login', id: 2 }
  ]

  return (
    <div className='text-center flex flex-col items-center' style={{height : '100vh',background : `url(https://i.ibb.co/Hhfj0Z6/main.png)`,backgroundRepeat : 'no-repeat',backgroundSize : 'cover',backgroundPosition : 'bottom'}} >
      <div className='pt-12 w-[306px]'>
        <p className="text-[40px] font-[600]	">Search, Book and Rent Your Vehincle Easily</p>
      </div>
      <div className='pt-80'>
            <Link to='/register'>
              <button className={'border-t border-r border-b border-[white] bg-[white] text-gray-800 font-semibold py-2 px-4 rounded-l-xl shadow w-[150px]'}>
                Register
              </button>
            </Link>
            <Link to='/login'>
              <button className={'border-t border-r border-b border-[white] bg-slate-600 text-white font-semibold py-2 px-4 rounded-r-xl shadow w-[150px]'}>
                Login
              </button>
            </Link>
      </div>
    </div>
  )
}

export default Entry