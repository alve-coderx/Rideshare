import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { Filter, Carousel } from '../../Components';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import map from '../../assets/map2.png';
import map2 from '../../assets/map.png';

const Search = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div className='bg-[white] flex flex-col items-center relative' >
        <div>
          <p className='mt-10 lg:mt-0 font-[600] text-[20px] text-center'>Suche dein Auto</p>
          <Link to='/map'>
            <img className='rounded-3xl my-5 lg:px-20 px-4 py-3 lg:block md:block hidden' src={map} />
            <img className='rounded-3xl my-5 lg:px-20 px-4 py-3 lg:hidden md:hidden block' src={map2} />
          </Link>
        </div>
        <div className='flex justify-around items-center lg:px-[8rem] md:px-[1rem] lg:w-full md:w-full  rounded-l-2xl absolute lg:bottom-[-10%] bottom-[-15%] '>
          <div className='bg-white lg:w-full md:w-full bg-[white] rounded-l-xl shadow-2xl '>
            <p className='text-[14px] font-[600] text-[#1E2024] rounded-l-xl shadow-2xl flex items-center shadow-lg px-2 py-4'><GrLocation /> Aktueller Standort</p>
          </div>
          <Filter />
        </div>
      </div>
      <div className='mt-20 lg:mt-16 lg:mx-[8rem] '>
        <Carousel />
      </div>
      <div className='flex items-center justify-between mx-[18px] lg:mt-2 mt-8 lg:mx-[9rem]'>
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
      <div className='flex justify-between items-end lg:mx-[9rem]'>
        <p className='border-b border-black text-white w-[35%]'>.</p>
        <p className='flex items-center text-[15px] font-[400]'>mehr filtern
          <AiOutlineDown aria-hidden="true" />
        </p>
        <p className='border-b border-black text-white w-[35%]'>.</p>
      </div>
      <div className='mt-10 text-center'>
        <Link to='/map'>
          <button className="bg-[#1E2024]  text-white font-[500] text-[14px] py-7 rounded-lg w-96 lg:w-[900px] md:w-[700px]">
            Auto suchen
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Search