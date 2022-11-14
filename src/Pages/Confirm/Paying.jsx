import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import paypal from '../../assets/paypal.png';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const OrderInfo = () => {
    const [show, setShow] = useState(1);

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
    const style = {
        wrapper_secondary: 'flex items-center text-left bg-[#FFFBE6] rounded-lg shadow-xl py-3 mt-10 lg:px-16 md:px-16 px-5 ',
        primary: 'text-[#838D95]  lg:text-[11px] md:text-[12px] text-[10px] font-[400] ',
        secondary: 'flex items-center text-[#636B75] text-[13px] font-[600]',
        text_bold: 'text-black text-[39px]',
    }
    return (
        <div className='lg:mx-[21rem] mx-5'>
            <div className='flex items-center py-9 items-center justify-between'>
                <Link to={`/order/info`}>
                    <p className='text-[#7D7AFF] font-[600] text-[16px]'>zurück</p>
                </Link>
                <div className='flex items-center lg:ml-10 md:ml-10'>
                    <p className='font-[600] lg:text-[19px] lg:text-[16px] text-[15px] '>
                        Bestätigen und bezahlen
                    </p>
                </div>
                <p className='text-white'>.</p>
            </div>
            <div>
                <p className='text-[18px] font-[600]'>
                    Versicherungsschutz auswählen
                </p>
            </div>
            {
                plans.map((plan) => (
                    <div onClick={() => clickHandler(plan.id)} key={plan.id} className={show === plan.id ? `cursor-pointer mt-8 py-5 px-4 shadow-xl rounded-xl bg-[#7D7AFF]` : `cursor-pointer mt-8 py-5 py-5 px-4 shadow-xl rounded-xl bg-[white]`} >
                        <p className={show === plan.id ? ' text-[15px] text-[white] font-[600]' : ' text-[15px] text-[black] font-[600]'}>{plan.header} <br /> <span className='text-[10px] font-[400]'>{plan.span}</span></p>
                    </div>
                ))
            }
            <div className={style.wrapper_secondary}>
                <p> <AiOutlineInfoCircle className={style.text_bold} /></p>
                <p className='ml-2'>
                    <p className='text-lg font-[900]'>Versicherungsschutz</p>
                    <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper pharetra at tellus interdum amet. .</p>
                </p>
            </div>
            <div className='mt-5'>
                <p className=' font-[600] text-[18px]'>
                    Zahlungsmethode
                </p>
                <img className='mt-5' src={paypal} />
                <p className='mt-3 font-[600] text-[16px]'>
                    Preis
                </p>
            </div>
            <div className='mx-auto lg:w-[40%] w-[92%] my-10'>
                <button className=" bg-[#1E2024] text-white p-4 rounded-lg w-full">
                    Anmietung anschauen
                </button>
            </div>
        </div>
    )
}

export default OrderInfo        