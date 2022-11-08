import React from 'react';
import { RangeSlider } from '../../Components';
import drive_eta from '../../assets/drive_eta.png';
import { Link } from 'react-router-dom';
const OrderInfo = () => {
    return (
        <div className='lg:mx-32 mx-5'>
            <div className='flex items-center justify-between py-9 '>
                <Link to='/user/1/inbox'>
                    <p className='text-[#7D7AFF] text-[500] text-[16px]'>zurück</p>
                </Link>
                <div className='flex items-center '>
                    <p className='font-[600] text-[14px] '>
                        Extrakilometer
                    </p>
                </div>
                <p className='text-white'>.</p>
            </div>
            <div>
                <p className='text-[18px] font-[600]'>
                    Extrakilometer <br /> hinzubuchen
                </p>
                <p className='text-[12px] text-[#838D95] font-[400]'>falls inkl. KM nicht ausreichen</p>
                {/* <input type="range" name="price" min="1" max="100" initValue={100}  className="w-full h-1 bg-[#D0D4D9] appearance-none" /> */}
                <RangeSlider />
            </div>
            <div className='mt-8  bg-white p-5 shadow-xl rounded-xl flex items-center justify-between'>
                <img src={drive_eta} />
                <p className=' w-52 text-[10px] text-[#838D95] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper pharetra at tellus interdum amet. Mauris eu montes, feugiat leo et donec nisi, id enim. Id amet felis eget neque.</p>
            </div>
            <div>
                <div className='flex justify-between items-center mt-5 border-b-2 py-4'>
                    <p className='font-[600] text-[14px]'>
                        Preis der Anmiete
                    </p>
                    <p className='bg-[#7D7AFF] text-white text-sm flex items-center rounded-lg px-3 py-1'>30 €</p>
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <p className='font-[600] text-[14px]'>
                        200 km
                    </p>
                    <p className='bg-[#7D7AFF] text-white text-sm flex items-center rounded-lg px-3 py-1'>inklusive</p>
                </div>
            </div>
            <div className='mx-auto right-0 left-0 absolute lg:w-[32%] w-[92%]'>
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