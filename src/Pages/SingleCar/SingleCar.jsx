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
const SingleCar = () => {
  const [open, setOpen] = useState(true)
  const [bottomHeigth, setBottomHeihgt] = useState()
  const sheetRef = useRef()
  console.log(open)
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
              <div className='relative'>
                <p className='absolute flex justify-between top-10 right-4 left-4 z-10	'>
                  <p className='bg-[#7D7AFF] text-white text-sm flex items-center rounded-lg px-3'><GoLocation /> 20 km</p>
                  <p className='bg-white p-3 rounded-lg'>
                    <Link to={`/startsite/cars`}>
                      <GrClose />
                    </Link>
                  </p>
                </p>
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
            <div className='flex justify-between mx-5 border-b-2'>
              <p className="text-[32px] font-[600]">Tesla <br /> <span className='text-[12px] text-slate-500'>Model 3</span></p>
              <p className="text-[32px] font-[600]">30 €  <br /> <span className='text-[12px] text-slate-500'>für 2 std</span></p>
            </div>
            <div className='flex justify-between mx-5 my-4'>
              <p className="flex items-center justify-around text-[32px] font-[600]">
                <span className='text-[12px] text-slate-500 mr-5'>Sitzanzahl</span>
                <span className='bg-[#7D7AFF] text-white text-sm flex items-center rounded-lg px-3 py-1'> 4</span>
              </p>
              <p className="flex items-center justify-around text-[32px] font-[600]">
                <span className='text-[12px] text-slate-500 mr-5'>Kraftstoff</span>
                <span className='bg-[#7D7AFF] text-white text-sm flex items-center rounded-lg px-2 py-1'> Elektro</span>
              </p>
            </div>
            <div className='mx-5 p-3 bg-[#F0F0FF] rounded-xl shadow-2xl flex items-center'>
              <div className='ml-4'>
                <ImKey />
              </div>
              <div>
                <p className='ml-5 font-black text-sm'>Vermieter*in treffen </p>
                <p className='ml-5 font-black text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus in tellus luctus quis massa.</p>
              </div>
            </div>
            <div className='mx-5 mt-4 flex items-center justify-between'>
              <Link to='/user/1/testominal'>
                <div className='flex items-center'>
                  <img src={avater} />
                  <p className='ml-1 text-[14px] font-[600]'>Jackie Forman</p>
                </div>
              </Link>
              <div >
                <p className='ml-1 text-[#FAAD14] text-[20px] flex font-[600]'>
                  {[1, 2, 3, 4, 5].map((index) => <AiFillStar />)}
                </p>
                <p className='ml-1 text-[11px] text-[#838D95] font-[500]'>25 Bewertungen</p>
              </div>
            </div>
            <div className='mx-5 mt-4'>
              <p className='flex items-center text-[14px] font-[600]'>
                Kilometer inklusive
                <span className='ml-1 text-[21px] text-[#838D95] font-[500]'><AiOutlineInfoCircle /></span>
              </p>
              <p className='mt-4 flex items-center text-[14px] font-[600]'>
                <span className='mr-3 text-[21px] text-[#52C41A] font-[500]'><AiOutlineCheckCircle /></span>
                Kilometer inklusive
              </p>
            </div>
            <div className='mx-5' >
              <p className='mt-4 flex items-center text-[14px] font-[600]'>
                Technische Daten
              </p>
              <div className='mt-4 flex items-center justify-between'>
                <p className='ml-1 text-[13px] text-[#838D95] font-[600]'>Baujahr</p>
                <p className='ml-1 text-[13px] text-[#838D95] font-[600]'>2018</p>
              </div>
              <div className='mt-4 flex items-center justify-between'>
                <p className='ml-1 text-[13px] text-[#838D95] font-[600]'>Kilometerstand</p>
                <p className='ml-1 text-[13px] text-[#838D95] font-[600]'>100.000 km</p>
              </div>
              <div className='mt-4 flex items-center justify-between'>
                <p className='ml-1 text-[13px] text-[#838D95] font-[600]'>Kraftstoff</p>
                <p className='ml-1 text-[13px] text-[#838D95] font-[600]'>Elektro</p>
              </div>
              <div className='mt-4 flex items-center justify-between'>
                <p className='ml-1 text-[13px] text-[#838D95] font-[600]'>Getriebe</p>
                <p className='ml-1 text-[13px] text-[#838D95] font-[600]'>Automatisch</p>
              </div>
              <p className='mt-4 flex items-center text-[14px] font-[600]'>
                Übergabe- & Rückgabeort
              </p>
            </div>
          </div>
          <div className='mx-auto right-0 left-0 bottom-2 absolute w-[92%]'>
            <button className="mt-10 bg-[#1E2024] hover:bg-blue-700 text-white py-4 px-4 rounded-lg w-full">
              Buchung anfragen
            </button>
          </div>
        </div>
      </BottomSheet>
    </div>
  )
}

export default SingleCar