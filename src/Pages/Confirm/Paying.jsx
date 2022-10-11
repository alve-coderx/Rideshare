import React from 'react'
import paypal from '../../assets/paypal.png'
const OrderInfo = () => {
    return (
        <div>
            <div className='flex items-center p-9 '>
                <p className='text-[#7D7AFF] text-[500] text-[16px]'>zurück</p>
                <div className='flex items-center ml-10'>
                    <p className='font-[600] text-[14px] '>
                        Bestätigen und bezahlen
                    </p>
                </div>
            </div>
            <div className='mx-5 ' >
                <p className='text-[18px] font-[600]'>
                    Versicherungsschutz <br /> auswählen
                </p>
            </div>
            <div className='mt-3 mx-8 bg-[#7D7AFF] py-5 px-4 shadow-xl rounded-xl '>
                <p className=' text-[14px] text-[white] font-[400]'>Standart <br /> <span className='text-[10px]'>Normale SB von 1000€ , Kaution 150€ inklusive</span></p>
            </div>
            <div className='mt-4 mx-8 bg-[white] py-5 px-4 shadow-xl rounded-xl '>
                <p className=' text-[14px] text-[black] font-[900]'>Plus <br /> <span className='text-[10px] font-[400]'>Reduzierte SB von 350€ Kaution 100€ / 14€ am Tag</span></p>
            </div>
            <div className='mt-4 mx-8 bg-[white] py-5 px-4 shadow-xl rounded-xl '>
                <p className=' text-[14px] text-[black] font-[900]'>Premium <br /> <span className='text-[10px] font-[400]'>Reduzierte SB von 0€ Kaution von 50€ ggfs. Ersatzauto inklsive / 22€ am Tag</span></p>
            </div>
            <div className='mx-5 mt-5 '>
                    <p className=' font-[600] text-[18px]'>
                        Zahlungsmethode
                    </p>
                    <img className='mt-5' src={paypal} />
                    <p className='mt-3 font-[600] text-[14px]'>
                        Preis
                    </p>
            </div>
            <div className='mx-auto right-0 left-0 bottom-2 absolute w-[92%]'>
                <button className="mt-10 bg-[#1E2024] text-white py-4 px-4 rounded-lg w-full">
                    Anmietung anschauen
                </button>
            </div>
        </div>
    )
}

export default OrderInfo