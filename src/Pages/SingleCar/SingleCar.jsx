import React, { useState } from 'react'
import Slider from "react-slick";
import { ImKey } from 'react-icons/im'
import { AiFillStar, AiOutlineInfoCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import './style.css'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import { useEffect } from 'react';
import { useRef } from 'react';
import avater from '../../assets/avater.png'
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';

const style = { 
  li : 'ml-1 text-[13px] text-[#838D95] font-[600]',
  smText : 'mt-4 flex items-center text-[14px] font-[600]',
  liWrapper : 'mt-4 flex items-center justify-between',
  span : 'flex items-center justify-around text-[32px] font-[600]',
  spanVal : 'text-[12px] font-[400] text-slate-500 mr-5'
}

const SingleCar = () => {
  const [open, setOpen] = useState(true);
  const [bottomHeigth, setBottomHeihgt] = useState();
  const sheetRef = useRef();
  const ref = useRef(null);
  useEffect(() => {
    // 👇️ use document.getElementById()

    const el = document.getElementById('carousel').offsetHeight;
    setBottomHeihgt(el);
  }, [bottomHeigth]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div id="carousel">
        <Slider {...settings}>
          {
            [1, 2, 3].map((index) => (
              <div key={index} className='relative'>
                <h1 className='absolute flex justify-between top-10 right-4 left-4 z-10	'>
                  <p className='bg-[#7D7AFF] text-white font-[500] text-[13.51px] flex items-center justify-between rounded-lg px-2'><GoLocation className='mr-1'/> 20 km</p>
                  <p className='bg-white p-3 rounded-xl'>
                    <Link to={`/startsite/cars`}>
                      <GrClose className='font-[900] text-[15px]'/>
                    </Link>
                  </p>
                </h1>
                <img className='w-screen' src='https://i.ibb.co/vkjDgxN/Frame-31-1.png' />
                <span className='z-10 absolute bottom-10 right-4 bg-[#FFC53D] text-white text-sm flex items-center rounded-lg px-3 py-1'><AiFillStar /> 5.0</span>
              </div>
            ))
          }

        </Slider>
      </div>
      <BottomSheet
        open={open}
        snapPoints={({ minHeight, maxHeight }) => [window.innerHeight - (bottomHeigth - 15), maxHeight / 0.6]}
        ref={sheetRef}
        blocking={false}
      >
        <div className='w-[100%] rounded-t-xl	shadow-xl' >
          <div style={{ overflowY: 'scroll', maxHeight: 'auto' }}>
            <div className='mx-5 border-b-2 '>
              <p className="text-[32px] font-[600] flex justify-between"><span>Tesla</span> <span>30 €</span></p>
              <p className="text-[12px] font-[400] text-slate-500 flex justify-between">  <span>Model 3</span> <span>für 2 std</span></p>
            </div>
            <div className='flex justify-between mx-5 my-4'>
              <p className={style.span}>
                <span className={style.spanVal}>Sitzanzahl</span>
                <span className='bg-[#7D7AFF] text-white text-[10px] rounded-lg px-3 py-1'> 4</span>
              </p>
              <p className={style.span}>
                <span className={style.spanVal}>Kraftstoff</span>
                <span className='bg-[#7D7AFF] text-white text-[10px] rounded-lg px-2 py-1'> Elektro</span>
              </p>
            </div>
            <div className='mx-5 p-3 bg-[#F0F0FF] rounded-xl flex items-center'>
              <div className='ml-4'>
                <ImKey />
              </div>
              <div>
                <p className='ml-5 font-black font-[600] text-[14px]'>Vermieter*in treffen </p>
                <p className='ml-5 font-black font-[400] text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus in tellus luctus quis massa.</p>
              </div>
            </div>
            <div className='mx-5 mt-4 flex items-center justify-between'>
              <Link to='/user/1/testominal'>
                <div className='flex items-center'>
                  <img src={avater} />
                  <p className='ml-3 text-[14px] font-[600]'>Jackie Forman</p>
                </div>
              </Link>
              <div >
                <p className='ml-1 text-[#FAAD14] text-[20px] flex font-[600]'>
                  {[1, 2, 3, 4, 5].map((index) => <AiFillStar key={index}/>)}
                </p>
                <p className='ml-1 text-[11px] text-[#838D95] font-[500]'>25 Bewertungen</p>
              </div>
            </div>
            <div className='mx-5 mt-4'>
              <p className='flex items-center text-[14px] font-[600]'>
                Kilometer inklusive
                <span className='ml-1 text-[21px] text-[#838D95] font-[500]'><AiOutlineInfoCircle /></span>
              </p>
              <p className={style.smText}>
                <span className='mr-3 text-[21px] text-[#52C41A] font-[500]'><AiOutlineCheckCircle /></span>
                Kilometer inklusive
              </p>
            </div>
            <div className='mx-5' >
              <p className={style.smText}>
                Technische Daten
              </p>
              <div className={style.liWrapper}>
                <p className={style.li}>Baujahr</p>
                <p className={style.li}>2018</p>
              </div>
              <div className={style.liWrapper}>
                <p className={style.li}>Kilometerstand</p>
                <p className={style.li}>100.000 km</p>
              </div>
              <div className={style.liWrapper}>
                <p className={style.li}>Kraftstoff</p>
                <p className={style.li}>Elektro</p>
              </div>
              <div className={style.liWrapper}>
                <p className={style.li}>Getriebe</p>
                <p className={style.li}>Automatisch</p>
              </div>
              <p className={style.smText}>
                Übergabe- & Rückgabeort
              </p>
            </div>
          </div>
          <div className='mx-auto right-0 left-0 bottom-2 absolute w-[92%]'>
          <Link to={'/user/1/message'}>
            <button className="mt-10 bg-[#1E2024] text-white text-[14px] py-4 px-4 rounded-lg w-full">
              Buchung anfragen
            </button>
          </Link>
          </div>
        </div>
      </BottomSheet>
    </div>
  )
}

export default SingleCar