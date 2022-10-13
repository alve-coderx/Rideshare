import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import paypal from '../../assets/paypal.png'
const OrderInfo = () => {
  const [show, setShow] = useState();

    const clickHandler = (index) => {
        setShow((prev) => {
          return prev === index ? null : index;
        });
    
      };
    const plans = [
        { header: 'Standart', span: 'Normale SB von 1000€ , Kaution 150€ inklusive', id: 1 },
        { header: 'Plus', span: 'Reduzierte SB von 350€ Kaution 100€ / 14€ am Tag', id: 2 },
        { header: 'Premium', span: 'Reduzierte SB von 0€ Kaution von 50€ ggfs. Ersatzauto inklsive / 22€ am Tag<', id: 3 },
    ]
    return (
        <div>
            <div className='flex items-center p-9 '>
                <Link to={`/order/info`}>
                    <p className='text-[#7D7AFF] text-[500] text-[16px]'>zurück</p>
                </Link>
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
            {
                plans.map((plan) => (
                    <div onClick={() => clickHandler(plan.id)}  key={plan.id} className={show === plan.id ? `mt-3 mx-8 py-5 px-4 shadow-xl rounded-xl bg-[#7D7AFF]` : `mt-3 mx-8 py-5 px-4 shadow-xl rounded-xl bg-[white]`} >
                        <p className={show === plan.id ? ' text-[14px] text-[white] font-[600]' : ' text-[14px] text-[black] font-[600]'}>{plan.header} <br /> <span className='text-[10px] font-[400]'>{plan.span}</span></p>
                    </div>
                ))
            }
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