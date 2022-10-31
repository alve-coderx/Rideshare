import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import avater from '../../assets/avater.png';
import filter_alt from '../../assets/filter_alt.png';
import Content from '../../assets/Content.png';
import { Link, useParams } from 'react-router-dom';

const Testominal = () => {
    const {id} = useParams();
    const style = {
        primary : 'font-[#838D95] text-[12px] font-[400]',
        secondary : 'text-[13px] text-[#7D7AFF] ml-2 font-[600]',
        wrapper : 'rounded-[24px] bg-white shadow-xl py-[24px] px-[12px] mt-3',
        text_sm : 'font-[#838D95] text-[#838D95] text-[10.6px]'

    }   
    return (
        <div  className='lg:mx-24'>
            <div>
                <Link to={`/car/${id}`}>
                    <p className='z-10 absolute top-10 left-32 text-[#7D7AFF]'>zurück</p>
                </Link>

                <div className='z-10 absolute top-10 right-32  bg-black p-2 rounded-lg'>
                    <img src={filter_alt} />
                </div>

            </div>
            <div className='flex flex-col items-center justify-center mt-10 mx-5'>
                <img className='mt-3' src={avater} />
                <p className='mt-3 font-black text-sm'>Thomas</p>
                <p className='ml-1 mt-2 text-[#FAAD14] text-[20px] flex font-[600]'>
                    {[1, 2, 3, 4, 5].map((index) => <AiFillStar index={index}/>)}
                </p>
                <div className='flex justify-center w-full mt-3'>
                    <div className='text-center ml-5'>
                        <p className='mt-3 font-black text-4xl'>30</p>
                        <p className={style.text_sm}>Anmietungen</p>
                    </div>
                    <div className='text-center ml-5'>
                        <p className='mt-3 font-black text-4xl'>20</p>
                        <p className={style.text_sm}>Bewertungen</p>
                    </div>
                </div>
            </div>
            <div className='mx-5 my-5'>
                <div className={style.wrapper}>
                    <p className='font-[#636B75] text-[12px] font-[400]'>Take as many pixel-perfect UI elements as you want and style them the way you need in a fraction of the time.</p>
                    <div className='flex items-center mt-4'>
                        <img src={Content} />
                        <p className={style.secondary}>Jackie Forman</p>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <p className={style.primary}>Take as many pixel-perfect UI elements as you want and style them the way you need in a fraction of the time.</p>
                    <div className='flex items-center mt-4'>
                        <img src={Content} />
                        <p className={style.secondary}>Jackie Forman</p>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <p className={style.primary}>Take as many pixel-perfect UI elements as you want and style them the way you need in a fraction of the time.</p>
                    <div className='flex items-center mt-4'>
                        <img src={Content} />
                        <p className={style.secondary}>Jackie Forman</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testominal