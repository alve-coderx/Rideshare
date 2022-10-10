import React from 'react'
import { GoLocation } from 'react-icons/go'
import Slider from 'react-rangeslider'
import RangeSlider from '../../Components/RangeSlider'
import drive_eta from '../../assets/drive_eta.png'
import paypal from '../../assets/paypal.png'
const OrderInfo = () => {
    return (
        <div>
            <div className='flex items-center p-9 '>
                <p className='text-[#7D7AFF] text-[500] text-[16px]'>zurück</p>
                <div className='flex items-center ml-10'>
                    <p className='font-[600] text-[14px] ml-5'>
                        Bestätigen und bezahlen
                    </p>
                </div>
            </div>
            <div className='mx-5'>
                <p className='text-[18px] font-[600]'>
                    Versicherungsschutz <br /> auswählen
                </p>
            </div>
            <div className='mt-3 mx-8 bg-[#7D7AFF] py-5 px-4 shadow-xl rounded-xl '>
                <p className=' text-[10px] text-[white] font-[400]'>Standart <br /> <span>Normale SB von 1000€ , Kaution 150€ inklusive</span></p>
            </div>
            <div className='mt-4 mx-8 bg-[white] py-5 px-4 shadow-xl rounded-xl '>
                <p className=' text-[10px] text-[black] font-[400]'>Standart <br /> <span>Normale SB von 1000€ , Kaution 150€ inklusive</span></p>
            </div>
            <div className='mt-4 mx-8 bg-[white] py-5 px-4 shadow-xl rounded-xl '>
                <p className=' text-[10px] text-[black] font-[400]'>Standart <br /> <span>Normale SB von 1000€ , Kaution 150€ inklusive</span></p>
            </div>
            <div className='mx-5 mt-16'>
                <div className=''>
                    <p className=' font-[600] text-[14px]'>
                        Zahlungsmethode
                    </p>
                    <img className='mt-5' src={paypal} />
                    <p className='mt-5 font-[600] text-[14px]'>
                        Preis
                    </p>
                </div>
            </div>
            <div className='mx-auto right-0 left-0 bottom-2 absolute w-[92%]'>
                <button className="mt-10 bg-[#1E2024] hover:bg-blue-700 text-white py-4 px-4 rounded-lg w-full">
                    Anmietung anschauen
                </button>
            </div>
        </div>
    )
}

export default OrderInfo