import React from 'react'
import { GrLocation } from 'react-icons/gr'
import {Filter,Carousel} from '../../Components'
import { AiOutlineDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import map from '../../assets/map.png'

const Search = () => {
  return (
    <div style={{overflowY : 'hidden',height : '100vh'}}>
      <div className='bg-[white] flex flex-col items-center'>
        <p className='mt-10 font-[600] text-[20px]'>Suche dein Auto</p>
        <Link to='/startsite/map'>
          <img className='rounded-3xl w-72 h-36 my-3' src={map} />
        </Link>
        <div className='flex justify-around shadow-xl items-center mt-1'>
          <div className='bg-white'>
            <p className='text-[14px] font-[600] text-[#1E2024]  flex items-center rounded-l-lg shadow-lg p-2'><GrLocation /> Aktueller Standort</p>
          </div>
          <Filter />
        </div>
      </div>
      <div className='mt-8'>
        <Carousel />
      </div>
      <div className='flex items-center justify-between mx-[18px] mt-4 '>
        <p className='font-black text-[14px] font-[600]'>
          Sofortbuchung<br />
          <span className='text-[#838D95] text-[10px]'>Vermieter akzeptiert alle Anfragen</span>
        </p>
        <div>
          <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#73D13D]"></div>
          </label>
        </div>
      </div>
      <div className='flex justify-between items-end mt-3'>
        <p className='border-b border-gray-300 text-white w-[100px]'>a</p>
        <p className='flex items-center text-[14px] font-[400]'>mehr filtern
          <AiOutlineDown aria-hidden="true" />
        </p>
        <p className='border-b border-gray-300 text-white w-[100px]'>a</p>
      </div>
      <div className='mx-8 mt-5'>
        <Link to='/startsite/map'>
          <button className="bg-[#1E2024]  text-white font-[500] text-[14px] py-4 rounded-lg w-full">
            Auto suchen
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Search