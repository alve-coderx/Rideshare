import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";

export default function SliderComponent() {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="w-full flex items-top bg-white p-3 rounded-xl relative shadow-xl mt-2">
                        <Link to={`/car/${car.id}`}>
                            <div className='relative'>
                                <span className='absolute top-1 left-1 bg-[#7D7AFF] text-white text-sm flex items-center rounded-lg p-1'><GoLocation /> 20 km</span>
                                <img src={car.img} />   
                            </div>
                        </Link>
                        <div className='ml-4'>
                            <p className='mt-1 font-black text-sm'>Tesla</p>
                            <p className='mt-1 text-[#838D95] text-sm'>Model 3</p>
                            <p className='mt-1 font-black text-sm'>30 € <span className='text-[#838D95]'>für 2 std</span>  </p>
                        </div>
                        <span className='absolute bottom-1 right-1 bg-[#FFC53D] text-white text-sm flex items-center rounded-lg p-1'><AiFillStar /> 5.0</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full flex items-top bg-white p-3 rounded-xl relative shadow-xl mt-2">
                        <Link to={`/car/${car.id}`}>
                            <div className='relative'>
                                <span className='absolute top-1 left-1 bg-[#7D7AFF] text-white text-sm flex items-center rounded-lg p-1'><GoLocation /> 20 km</span>
                                <img src={car.img} />
                            </div>
                        </Link>
                        <div className='ml-4'>
                            <p className='mt-1 font-black text-sm'>Tesla</p>
                            <p className='mt-1 text-[#838D95] text-sm'>Model 3</p>
                            <p className='mt-1 font-black text-sm'>30 € <span className='text-[#838D95]'>für 2 std</span>  </p>
                        </div>
                        <span className='absolute bottom-1 right-1 bg-[#FFC53D] text-white text-sm flex items-center rounded-lg p-1'><AiFillStar /> 5.0</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full flex items-top bg-white p-3 rounded-xl relative shadow-xl mt-2">
                        <Link to={`/car/${car.id}`}>
                            <div className='relative'>
                                <span className='absolute top-1 left-1 bg-[#7D7AFF] text-white text-sm flex items-center rounded-lg p-1'><GoLocation /> 20 km</span>
                                <img src={car.img} />
                            </div>
                        </Link>
                        <div className='ml-4'>
                            <p className='mt-1 font-black text-sm'>Tesla</p>
                            <p className='mt-1 text-[#838D95] text-sm'>Model 3</p>
                            <p className='mt-1 font-black text-sm'>30 € <span className='text-[#838D95]'>für 2 std</span>  </p>
                        </div>
                        <span className='absolute bottom-1 right-1 bg-[#FFC53D] text-white text-sm flex items-center rounded-lg p-1'><AiFillStar /> 5.0</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full flex items-top bg-white p-3 rounded-xl relative shadow-xl mt-2">
                        <Link to={`/car/${car.id}`}>
                            <div className='relative'>
                                <span className='absolute top-1 left-1 bg-[#7D7AFF] text-white text-sm flex items-center rounded-lg p-1'><GoLocation /> 20 km</span>
                                <img src={car.img} />
                            </div>
                        </Link>
                        <div className='ml-4'>
                            <p className='mt-1 font-black text-sm'>Tesla</p>
                            <p className='mt-1 text-[#838D95] text-sm'>Model 3</p>
                            <p className='mt-1 font-black text-sm'>30 € <span className='text-[#838D95]'>für 2 std</span>  </p>
                        </div>
                        <span className='absolute bottom-1 right-1 bg-[#FFC53D] text-white text-sm flex items-center rounded-lg p-1'><AiFillStar /> 5.0</span>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </>
    );
}
