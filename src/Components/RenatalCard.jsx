import React from 'react';
import { GoLocation } from 'react-icons/go';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsClock } from 'react-icons/bs';


const RentalCard = ({ car }) => {
    return (
        <div className="w-full flex items-top bg-white p-3 rounded-xl relative shadow-xl mt-2 ">
            <Link to={`/rent/finished`}>
                <div className='relative'>
                    
                    {
                        window.location.pathname === '/startsite/rentals' ? (<p className='absolute top-1 left-1 p-2 rounded-xl bg-[#FFE58F] font-[900] text-[20px]'><BsClock /></p>) : (<span className='absolute top-1 left-1 bg-[#7D7AFF] text-white text-[8px] flex items-center rounded-lg p-1'><GoLocation /> 20 km</span>)
                     }
                    <img src={car.img} />
                </div>
            </Link>
            <div className='ml-4'>
                <p className='mt-1 font-black text-[16] font-[600]'>Tesla</p>
                <p className='mt-1 text-[#838D95] text-[12px]'>Model 3</p>
                <p className='mt-1 font-black text-sm'>30 € <span className='text-[#838D95] text-[10px]'>für 2 std</span>  </p>
            </div>
            <span className='absolute bottom-3 right-3 bg-[#FFC53D] text-white text-sm flex items-center rounded-lg p-1'><AiFillStar /> 5.0</span>
        </div>
    )
}

export default RentalCard;