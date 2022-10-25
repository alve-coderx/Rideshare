import React from 'react'
import { AiFillStar } from "react-icons/ai";
import mapcar from '../assets/mapcar.png';
import { Link } from "react-router-dom";

const MapCard = () => {
    return (
        <Link to='/startsite/cars'>
            <div className="bg-white p-1 rounded-xl shadow-xl ml-16">
                <img src={mapcar} />
                <div className='mx-4 flex items-end justify-between'>
                    <div>
                        <p className='mt-1 font-black text-[20px] font-[600]'>Autoname</p>
                        <p className='mt-1 text-[#838D95] text-[12px] font-[400]'>Model 3</p>
                        <p className='mt-1 text-[#7D7AFF] font-[600] text-[18px]'>30 € <span className='text-[#838D95] text-[12px] font-[400]'>für 2 std</span>  </p>
                    </div>
                    <span className='bg-[#FFC53D] text-white text-sm flex items-center rounded-lg py-1 px-2'><AiFillStar /> 5.0</span>
                </div>
            </div>
        </Link>
    )
}

export default MapCard