import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AiFillCar, AiOutlineUser } from 'react-icons/ai'
import { HiOutlineKey } from 'react-icons/hi'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'



const Navigator = () => {
  const [toggle, setToggle] = useState();
  const clickHandler = (index) => {
    setToggle((prev) => {
      return prev === index ? null : index;
    });

  };
  const navigations = [
    { icons: <BiSearchAlt2 />, href: '/startsite/search', id : 1 },
    { icons: <HiOutlineKey />, href: '/startsite/rentals', id : 2 },
    { icons: <AiFillCar />, href: '/startsite/mycars', id : 3 },
    { icons: <AiOutlineUser />, href: '/startsite/user/1', id : 4 },
  ]
  console.log(window.location.pathname)
  return (
    <div>
      <Outlet />
      <div className='flex justify-around bg-white p-5 absolute bottom-0 w-full shadow-2xl	'>
        {
          navigations.map((nav) => (
            <Link to={nav.href}>
              <p key={nav.icons} onClick={() => clickHandler(nav.id)} className={toggle === nav.id ? 'text-[25.2px] text-[#7D7AFF]' : 'text-[25.2px] text-[black]'}>
                {nav.icons}
              </p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Navigator