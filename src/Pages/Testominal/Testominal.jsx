import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import avater from '../../assets/avater.png'
import filter_alt from '../../assets/filter_alt.png'
import Content from '../../assets/Content.png'
import { Link } from 'react-router-dom'

const Testominal = () => {
    return (
        <div>
            <div className='mx-5'>
                <p className='z-10 absolute top-10 left-5 text-[#7D7AFF]'>zurück</p>
                <Link to={'/user/1/message'}>
                    <div className='z-10 absolute top-10 right-5  bg-black p-2 rounded-lg'>
                        <img src={filter_alt} />
                    </div>
                </Link>
            </div>
            <div className='flex flex-col items-center justify-center mt-10 mx-5'>
                <img className='mt-3' src={avater} />
                <p className='mt-3 font-black text-sm'>Thomas</p>
                <p className='ml-1 mt-2 text-[#FAAD14] text-[20px] flex font-[600]'>
                    {[1, 2, 3, 4, 5].map((index) => <AiFillStar />)}
                </p>
                <div className='flex justify-around w-full mt-3'>
                    <div className='text-center'>
                        <p className='mt-3 font-black text-4xl'>30</p>
                        <p className='mt-3 font-[#838D95] text-[10.6px]'>Anmietungen</p>
                    </div>
                    <div className='text-center'>
                        <p className='mt-3 font-black text-4xl'>30</p>
                        <p className='mt-3 font-[#838D95] text-[10.6px]'>Anmietungen</p>
                    </div>
                </div>
            </div>
            <div className='mx-5 mt-5'>
                <div className='rounded-[24px] bg-white shadow-xl py-[24px] px-[12px] mt-3'>
                    <p className='font-[#838D95] text-[12px]'>Take as many pixel-perfect UI elements as you want and style them the way you need in a fraction of the time.</p>
                    <div className='flex items-center mt-4'>
                        <img src={Content} />
                        <p className='text-[13px] text-[#7D7AFF] ml-2'>Jackie Forman</p>
                    </div>
                </div>
                <div className='rounded-[24px] bg-white shadow-xl py-[24px] px-[12px] mt-3'>
                    <p className='font-[#838D95] text-[12px]'>Take as many pixel-perfect UI elements as you want and style them the way you need in a fraction of the time.</p>
                    <div className='flex items-center mt-4'>
                        <img src={Content} />
                        <p className='text-[13px] text-[#7D7AFF] ml-2'>Jackie Forman</p>
                    </div>
                </div>
                <div className='rounded-[24px] bg-white shadow-xl py-[24px] px-[12px] mt-3'>
                    <p className='font-[#838D95] text-[12px]'>Take as many pixel-perfect UI elements as you want and style them the way you need in a fraction of the time.</p>
                    <div className='flex items-center mt-4'>
                        <img src={Content} />
                        <p className='text-[13px] text-[#7D7AFF] ml-2'>Jackie Forman</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testominal