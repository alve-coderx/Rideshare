import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {AiFillCar,AiOutlineUser} from 'react-icons/ai'
import {HiOutlineKey} from 'react-icons/hi'
import {BiSearchAlt2} from 'react-icons/bi'



const Navigator = () => {

  const navigations = [
    {icons : <BiSearchAlt2/> , href : '/startsite/search'},
    {icons : <HiOutlineKey/> , href : '/startsite/rentals'},
    {icons : <AiFillCar/> , href : '/startsite/mycars'},
    {icons : <AiOutlineUser/> , href : '/startsite/user/1'},
  ]
  console.log(window.location.pathname)
  return (
    <div>
      <Outlet />
      <div className='flex justify-around bg-white p-5 absolute bottom-0 w-full shadow-2xl	'>
        {
          navigations.map((nav) => (
            <Link to={nav.href} className={window.location.pathname === nav.href ? 'text-[25.2px] text-[#7D7AFF]' : 'text-[25.2px] text-[black]'}>{nav.icons}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default Navigator