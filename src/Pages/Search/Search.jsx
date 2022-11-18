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
    <div className="lg:overflow-hidden overflow-auto h-screen lg:h-auto lg:pb-5 pb-20 mt-1">
      <div className='bg-[#fafafa] flex flex-col items-center relative ' >
        <div>
          <p className='mt-5 lg:mt-1 font-[900] text-[21px] text-center'>Suche dein Auto</p>
          <Link to='/map'>
            <img className='rounded-3xl my-4 lg:px-[18rem] md:px-10 px-8 py-3 lg:block md:block block lg:h-auto md:h-auto h-32' src={map} />
          </Link>
        </div>
        <div className='flex justify-around items-center w-full lg:px-[18rem] md:px-10 px-8 rounded-l-2xl absolute lg:bottom-[-10%] bottom-[-15%] '>
          <div className='bg-white bg-[white] rounded-l-xl w-full shadow-2xl '>
            <p className='lg:text-[14px] text-[12px] font-[600] text-[#1E2024] rounded-l-xl shadow-2xl flex items-center shadow-lg px-2 py-4'><GrLocation /> Aktueller Standort</p>
          </div>
          <Filter />
        </div>
      </div>
      <div className='mt-16 lg:mt-18 lg:px-[18rem] md:px-10 px-4'>
        <Carousel />
      </div>
      <div className='flex items-center justify-between mx-[18px] lg:mt-2 mt-5 lg:px-[18rem] md:px-10 px-4'>
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
      <div className='flex justify-between items-end lg:px-[19rem] md:px-10 px-8 mt-2'>
        <p className='border-b-[3px] border-[#838D95] text-white w-[30%] lg:w-[40%] md:w-[40%]'>.</p>
        <p className='flex items-center text-[14px] font-[600] cursor-pointer' onClick={() => setToggle((prev) => !prev)}>mehr filtern
          <AiOutlineDown aria-hidden="true" />
        </p>
        <p className='border-b-[3px] border-[#838D95] text-white w-[30%] lg:w-[40%] md:w-[40%]'>.</p>
      </div>
      {toggle &&
        <div className='lg:px-[18rem] md:px-10 px-8 '>
          <Counter name='Anzahl der Türen' />
          <hr className='border-[1px] border-[#838D95] mx-4'/>
          <Counter name='Anzahl der Sitze' />
          <p className='mx-3 text-black text-[14px] my-5 font-[800]'>Weitere Merkmale</p>
          <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-3 gap-2 mt-2 justify-items-center'>
            {
              texts.map((text) => <p key={text.id} onClick={() => clickHandler(text.id)} className={active === text.id ? 'cursor-pointer text-[white] p-2 rounded-xl text-[12px] bg-[#7D7AFF] font-[400]' : 'cursor-pointer text-[black] border border-black p-2 rounded-xl text-[12px] bg-[transparent] font-[400]'}>{text.name}</p>)
            }
          </div>
        </div>
      }
      <div className='mt-8 text-center'>
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