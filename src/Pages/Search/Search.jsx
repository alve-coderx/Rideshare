import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { Filter, Carousel } from '../../Components';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import map from '../../assets/map2.png';

const Search = () => {
  return (
    <div style={{ overflow: 'hidden' }} >
      <div className='bg-[white] flex flex-col items-center'>
        <p className='mt-10 lg:mt-0 font-[600] text-[20px]'>Suche dein Auto</p>
        <Link to='/map'>
          <img className='rounded-3xl my-3 px-20' src={map} />
        </Link>
        <div className='flex justify-around shadow-xl items-center mt-1 '>
          <div className='bg-white lg:w-[70rem]'>
            <p className='text-[14px] font-[600] text-[#1E2024]  flex items-center rounded-l-lg shadow-lg p-2'><GrLocation /> Aktueller Standort</p>
          </div>
          <Filter />
        </div>
      </div>
      <div className='mt-8 lg:mt-1 lg:mx-[5rem]'>
        <Carousel />
      </div>
      <div className='flex items-center justify-between mx-[18px] mt-4 lg:mx-[6rem]'>
        <p className='font-black text-[14px] font-[600]'>
          Sofortbuchung<br />
          <span className='text-[#838D95] text-[10px]'>Vermieter akzeptiert alle Anfragen</span>
        </p>
        <div>
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#73D13D]"></div>
          </label>
        </div>
      </div>
      <div className='flex justify-between items-end lg:mx-[6rem]'>
        <p className='border-b border-black text-white w-[40%]'>.</p>
        <p className='flex items-center text-[14px] font-[400]'>mehr filtern
          <AiOutlineDown aria-hidden="true" />
        </p>
        <p className='border-b border-black text-white w-[40%]'>.</p>
      </div>
      <div className='mx-8 lg:mx-[25rem] my-5'>
        <Link to='/map'>
          <button className="bg-[#1E2024]  text-white font-[500] text-[14px] py-4 rounded-lg w-full">
            Auto suchen
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Search