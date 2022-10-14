import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { MdDateRange } from 'react-icons/md'
import { Link } from 'react-router-dom'
import avater from '../../../assets/avater.png';

const LandlordRole = ({active}) => {
    return (
        <div className='mx-10 mt-5 pb-16 h-5/6' style={{ overflowY: 'scroll' }}>
            {
                active === 1 ?
                    (
                        <div>
                            {
                                [1, 2, 3].map((index) => (
                                    <Link key={index} to={`/rent/${index}`}>
                                        <div key={index} className='bg-white rounded-lg shadow-lg mt-2 p-4 flex items-center relative'>
                                            <img className='w-[50px] h-[50px]' src={avater} />
                                            <div className='ml-5'>
                                                <p className='font-[900] '>Thomas</p>
                                                <p className='bg-slate-200 text-[10px] text-[400] flex items-center rounded-lg px-2 py-2  mt-3'><MdDateRange className='mr-1' /> Do. 23. Juni  14:00 - 17:00</p>
                                                <p className='text-[10px] font-[900] text-[#7D7AFF] mt-5 w-full'>
                                                    <span>20 €</span> <span className='flex items-center text-black text-[12px] font-[600] absolute right-3 bottom-4'>Antworten <AiOutlineArrowRight className='ml-2' /></span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    )
                    :
                    ''
            }
        </div>
    )
}

export default LandlordRole