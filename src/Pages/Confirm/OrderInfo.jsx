import React from 'react'
import {RangeSlider} from '../../Components'
import drive_eta from '../../assets/drive_eta.png'
import { Link } from 'react-router-dom'
const OrderInfo = () => {
    return (
        <div>
            <div className='flex items-center p-9 '>
                <p className='text-[#7D7AFF] text-[500] text-[16px]'>zurück</p>
                <div className='flex items-center ml-10'>
                    <p className='font-[600] text-[14px] ml-5'>
                        Extrakilometer
                    </p>
                </div>
            </div>
            <div className='mx-5'>
                <p className='text-[18px] font-[600]'>
                    Extrakilometer <br /> hinzubuchen
                </p>
                <p className='text-[12px] text-[#838D95] font-[400]'>falls inkl. KM nicht ausreichen</p>
                {/* <input type="range" name="price" min="1" max="100" initValue={100}  className="w-full h-1 bg-[#D0D4D9] appearance-none" /> */}
                <RangeSlider />
            </div>
            <div className='mt-8 mx-5 bg-white p-5 shadow-xl rounded-xl flex items-center justify-between'>
                <img src={drive_eta} />
                <p className=' w-52 text-[10px] text-[#838D95] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper pharetra at tellus interdum amet. Mauris eu montes, feugiat leo et donec nisi, id enim. Id amet felis eget neque.</p>
            </div>
            <div className='mx-5'>
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
            <div className='mx-auto right-0 left-0 bottom-2 absolute w-[92%]'>
                <Link to={`/order/payment`}>
                    <button className="mt-10 bg-[#1E2024] hover:bg-blue-700 text-white py-4 px-4 rounded-lg w-full">
                        Bestätigen
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default OrderInfo