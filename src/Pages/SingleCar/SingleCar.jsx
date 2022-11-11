import React, { useState } from 'react';
import Slider from "react-slick";
import { ImKey } from 'react-icons/im';
import { AiFillStar, AiOutlineInfoCircle, AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai';
import './style.css';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { useEffect } from 'react';
import { useRef } from 'react';
import avater from '../../assets/avater.png';
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import map from '../../assets/map3.png'
import { MdAddPhotoAlternate } from 'react-icons/md';

const style = {
  li: 'ml-1 text-[13px] text-[#838D95] font-[600]',
  smText: 'mt-3 flex items-center text-[12px] font-[600]',
  liWrapper: 'mt-4 flex items-center justify-between',
  span: 'flex items-center justify-around text-[32px] font-[600]',
  spanVal: 'text-[12px] font-[400] text-slate-500 mr-5',
  wrapper: 'w-[70px] h-12 text-center bg-[#7D7AFF] flex items-center justify-center rounded-2xl shadow-sm px-2 py-8 mt-2',
  primary: 'text-[white] text-center text-[32px] font-[400]',


}

const SingleCar = () => {
  const [open, setOpen] = useState(true);
  const [bottomHeigth, setBottomHeihgt] = useState();
  const sheetRef = useRef();

  useEffect(() => {
    // 👇️ use document.getElementById()
    const el = document.getElementById('carousel').offsetHeight;
    setBottomHeihgt(el);
  }, [bottomHeigth, sheetRef?.current?.height]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
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
                <div className='lg:hidden md:hidden block'>
                  <img className='w-screen lg:w-auto' src='https://i.ibb.co/vkjDgxN/Frame-31-1.png' />
                </div>
                <div className='lg:block md:block hidden'>
                  <img className='w-screen lg:w-full' src='https://i.ibb.co/zVCvfqj/Frame-161.png' />
                </div>
                {/* <img className='w-screen ' src='https://i.ibb.co/zVCvfqj/Frame-161.png' /> */}
                <span className='z-10 absolute bottom-10 lg:right-32 right-6 bg-[#FFC53D] text-white text-sm flex items-center rounded-lg px-3 py-1'><AiFillStar /> 5.0</span>
              </div>
            ))
          }

        </Slider>
      </div>
      <h1 className='absolute flex justify-between top-5 right-4 left-4 z-10 lg:mx-[7rem]'>
        <p className='bg-[#7D7AFF] text-white font-[500] text-[11px] flex items-center justify-between rounded-lg px-2'><GoLocation className='mr-1' /> 20 km</p>
        <Link to={`/startsite/cars`}>
          <div className='bg-[black]  p-3 rounded-xl '>
            <p className='text-white'><AiOutlineClose className='font-[900] text-[15px] ' /></p>
          </div>
        </Link>
      </h1>
      <BottomSheet
        open={open}
        snapPoints={({ minHeight, maxHeight }) => [window.innerHeight - (bottomHeigth - 15), maxHeight / 0.6]}
        ref={sheetRef}
        blocking={false}
      >

        <div className='w-[100%] rounded-t-xl	shadow-xl pt-10' >
          <div className='mx-5 lg:mx-[8rem] pb-24 h-5/6' >
            <div className='border-b-2 '>
              <p className="text-[32px] font-[600] flex justify-between"><span>Tesla</span> <span>30 €</span></p>
              <p className="text-[12px] font-[400] text-slate-500 flex justify-between">  <span>Model 3</span> <span>für 2 std</span></p>
            </div>
            <div className='flex justify-left my-4'>
              <p className={style.span}>
                <span className={style.spanVal}>Sitzanzahl</span>
                <span className='bg-[#7D7AFF] text-white text-[10px] rounded-lg px-3 py-1'> 4</span>
              </p>
              <p className={`${style.span} ml-2`}>
                <span className={style.spanVal}>Kraftstoff</span>
                <span className='bg-[#7D7AFF] text-white text-[10px] rounded-lg px-2 py-1'> Elektro</span>
              </p>
            </div>
            <div className='p-3 bg-[#F0F0FF] rounded-xl flex items-center'>
              <div className='ml-4'>
                <ImKey />
              </div>
              <div>
                <p className='ml-5 font-black font-[600] text-[14px]'>Vermieter*in treffen </p>
                <p className='ml-5 font-black font-[400] text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus in tellus luctus quis massa.</p>
              </div>
            </div>
            <div className='mt-4 flex items-center justify-between'>
              <Link to='/user/1/testominal'>
                <div className='flex items-center'>
                  <img src={avater} />
                  <p className='ml-3 text-[14px] font-[600]'>Jackie Forman</p>
                </div>
              </Link>
              <div >
                <p className='ml-1 text-[#FAAD14] text-[20px] flex font-[600]'>
                  {[1, 2, 3, 4, 5].map((index) => <AiFillStar key={index} />)}
                </p>
                <p className='ml-1 text-[11px] text-[#838D95] font-[500]'>25 Bewertungen</p>
              </div>
            </div>
            <div className='mt-4'>
              <p className='flex items-center text-[14px] font-[600]'>
                Kilometer inklusive
                <span className='ml-1 text-[21px] text-[#838D95] font-[500]'><AiOutlineInfoCircle /></span>
              </p>
              <p className={style.smText}>
                <span className='mr-3 text-[21px] text-[#52C41A] font-[500]'><AiOutlineCheckCircle /></span>
                40km kostenlos
              </p>
            </div>
            <div>
              <p className='text-[14px] font-[600] mt-1'>
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
              <p className={style.li}>Musterstraße, 53474 Ahrweiler</p>

            </div>
            <div>
              <img src={map} className='w-full my-2' />
            </div>
            <div>
              <p className='text-[14px] font-[600] mt-1'>
                Versicherung und Pannendienst
              </p>
              <div className={style.wrapper}>
                <p className={style.primary}><MdAddPhotoAlternate /></p>
              </div>
            </div>
            <div>
              <p className='text-[14px] font-[600] mt-1'>
                Bedingungen
              </p>
              <p className={`flex items-center ${style.li}`}> <span className='mr-3 text-[21px] text-[#52C41A] font-[500] my-2'><AiOutlineCheckCircle /></span>
                Über 18 Jahre alt und 2 Jahre Fahrzeugerfahrung</p>

            </div>
          </div>
          <div className='mx-auto right-0 left-0 w-full bg-white bottom-0 absolute text-center'>
            <Link to={'/user/1/message'}>
              <button className="mb-4 mt-1 bg-[#1E2024] text-white text-[14px] py-6 px-4 rounded-lg lg:w-[30%] md:w-[60%] w-[80%]">
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