import React from 'react';
import { RangeSlider } from '../../Components';
import drive_eta from '../../assets/drive_eta.png';
import { Link } from 'react-router-dom';
const OrderInfo = () => {
    return (
        <div className='lg:mx-96 mx-5'>
            <div className='flex items-center justify-between py-9 '>
                <Link to='/user/1/inbox'>
                    <p className='text-[#7D7AFF] font-[600] text-[16px]'>zurück</p>
                </Link>
                <div className='flex items-center '>
                    <p className='font-[600] text-[14px] '>
                        Extrakilometer
                    </p>
                </div>
                <p className='text-white'>.</p>
            </div>
            <div className='mt-10'>
                <p className='text-[18px] font-[600]'>
                    Extrakilometer  hinzubuchen
                </p>
                <p className='text-[12px] text-[#838D95] font-[400]'>falls inkl. KM nicht ausreichen</p>
                <RangeSlider />
            </div>
            <div className='mt-16 bg-white py-2 px-6 shadow-xl rounded-xl flex items-center '>
                <img src={drive_eta}/>
                <p className='lg:text-[15px] md:text-[12px] text-[10px] lg:ml-10 md:ml-10 ml-2 text-[#838D95] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper pharetra at tellus interdum amet. Mauris eu montes, feugiat leo et donec nisi, id enim. Id amet felis eget neque.</p>
            </div>
            <div className='mt-16'>
                <div className='flex justify-between items-center mt-5 border-b-2 py-4'>
                    <p className='font-[900] text-[18px]'>
                        Preis der Anmiete
                    </p>
                    <p className='bg-[#7D7AFF] text-white text-sm flex items-center rounded-lg px-3 py-1'>30 €</p>
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <p className='font-[900] text-[18px]'>
                        200 km
                    </p>
                    <p className='bg-[#7D7AFF] text-white text-sm flex items-center rounded-lg px-3 py-1'>inklusive</p>
                </div>
            </div>
            <div className='mx-auto right-0 bottom-5 left-0 absolute lg:w-[32%] w-[92%]'>
                <Link to={`/order/payment`}>
                    <button className="my-10 bg-[#1E2024] text-white py-4 px-4 rounded-lg w-full">
                        Bestätigen
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default OrderInfo