import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { Filter, Carousel, Counter } from '../../Components';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import map from '../../assets/map2.png';
import map2 from '../../assets/map.png';
import { useState } from 'react';
import { texts } from '../../fakeDB/elements';

const Search = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(1);
  const clickHandler = (index) => {
    setActive((prev) => {
      return prev === index ? null : index;
    });

  };
  return (
    <div  className="lg:overflow-hidden overflow-scroll h-screen lg:h-[120vh] pb-20">
      <div className='bg-[white] flex flex-col items-center relative ' >
        <div>
          <p className='mt-5 lg:mt-0 font-[600] text-[20px] text-center'>Suche dein Auto</p>
          <Link to='/map'>
            <img className='rounded-3xl my-4  lg:px-44 md:px-10 px-8 py-3 lg:block md:block hidden' src={map} />
            <img className='rounded-3xl my-4 py-3 lg:hidden md:hidden block' src={map2} />
          </Link>
        </div>
        <div className='flex justify-around items-center w-full lg:px-44 md:px-10 px-12 rounded-l-2xl absolute lg:bottom-[-10%] bottom-[-15%] '>
          <div className='bg-white bg-[white] rounded-l-xl w-full shadow-2xl '>
            <p className='lg:text-[14px] text-[12px] font-[600] text-[#1E2024] rounded-l-xl shadow-2xl flex items-center shadow-lg px-2 py-4'><GrLocation /> Aktueller Standort</p>
          </div>
          <Filter />
        </div>
      </div>
      <div className='mt-14 lg:mt-16  lg:px-44 md:px-10 px-2'>
        <Carousel />
      </div>
      <div className='flex items-center justify-between mx-[18px] lg:mt-2 mt-5 lg:px-44 md:px-10 px-8'>
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
      <div className='flex justify-between items-end lg:px-44 md:px-10 px-8'>
        <p className='border-b border-black text-white w-[35%]'>.</p>
        <p className='flex items-center text-[12px] font-[400]' onClick={() => setToggle((prev) => !prev)}>mehr filtern
          <AiOutlineDown aria-hidden="true" />
        </p>
        <p className='border-b border-black text-white w-[35%]'>.</p>
      </div>
      {toggle &&
        <div className='lg:px-44 md:px-10 px-8 '>
          <Counter name='Anzahl der Türen' />
          <p className='border-b border-black text-white w-[35%]'>.</p>
          <Counter name='Anzahl der Sitze' />
          <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-3 gap-4 mt-2 justify-items-center'>
            {
              texts.map((text) => <p key={text.id} onClick={() => clickHandler(text.id)} className={active === text.id ? 'text-[white] p-2 rounded-xl text-[12px] bg-[#7D7AFF] font-[400]' : 'text-[black] border border-black p-2 rounded-xl text-[12px] bg-[transparent] font-[400]'}>{text.name}</p>)
            }
          </div>
        </div>
      }
      <div className='mt-4 text-center'>
        <Link to='/map'>
          <button className="bg-[#1E2024] text-white font-[500] text-[14px] py-5  rounded-lg lg:w-[40rem] md:w-[30rem] w-64">
            Auto suchen
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Search