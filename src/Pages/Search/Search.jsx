import React from 'react'
import { GrLocation } from 'react-icons/gr'
import Filter from '../../Components/Filter'
import Carousel from '../../Components/Carousel'
import { Menu, Transition } from '@headlessui/react'
import { AiOutlineDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import map from '../../assets/map.png'
const Search = () => {
  return (
    <div style={{overflowY : 'hidden',height : '100vh'}}>
      <div className='bg-[white] flex flex-col items-center'>
        <p className='mt-10 font-black text-sm'>Suche dein Auto</p>
        <Link to='/startsite/map'>
          <img className='rounded-3xl w-72 h-36 my-3' src={map} />
        </Link>
        <div className='flex justify-around shadow-xl items-center mt-1'>
          <div className='bg-white'>
            <p className='text-sm text-black flex items-center border border-gray-300 rounded-md p-2'><GrLocation /> Aktueller Standort</p>
          </div>
          <Filter />
        </div>
      </div>
      <div>
        <Carousel />
      </div>
      <div className='flex items-center justify-between mx-[18px] mt-4 '>
        <p className='font-black text-sm'>
          Sofortbuchung<br />
          <span className='text-[#838D95] text-[10px]'>Vermieter akzeptiert alle Anfragen</span>
        </p>
        <div>
          <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#73D13D] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#73D13D]"></div>
          </label>
        </div>
      </div>
      <div className='flex justify-between'>
        <p className='border-b border-gray-300 text-white w-[100px]'>a</p>
        <p className='flex items-center'>mehr filtern
          <AiOutlineDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </p>
        <p className='border-b border-gray-300 text-white w-[100px]'>a</p>
      </div>
      <div className='mx-[18px]'>
        <Link to='/startsite'>
          <button class="mt-10 bg-[#1E2024] hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full">
            Auto suchen
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Search