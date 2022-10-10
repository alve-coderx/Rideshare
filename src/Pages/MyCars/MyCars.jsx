import React from 'react'
import { AiOutlinePlusCircle, AiOutlineEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const MyCars = () => {
    return (
        <div>
            <div className='text-center mt-5'>
                <p className='font-[600] text-[24px]'>Meine Autos</p>
            </div>
            <div className='mx-5 mt-5'>
                <Link to={`/createcar`}>
                    <p className='flex items-center border border-[#52C41A] px-5 justify-start rounded-lg py-3'><AiOutlinePlusCircle className='mr-5 text-[#52C41A]' /> Fahrzeug hinzufügen</p>
                </Link>
            </div>
            <div className='mx-5  mt-5'>
                {
                    [1, 2, 3].map((index) => (
                        <div key={index} className="w-full flex items-top bg-white p-3 rounded-xl relative shadow-xl mt-3">
                            <div className='relative'>
                                <img src={'https://i.ibb.co/8dn6DTz/Image-Placeholder-1.png'} />
                            </div>
                            <div className='ml-4'>
                                <p className='mt-1 font-black text-sm'>Tesla</p>
                                <p className='mt-1 text-[#838D95] text-sm'>Model 3</p>
                                <p className='flex mt-1 text-[#7D7AFF] text-[9px] border border-[#7D7AFF] rounded-lg p-2'>informationen bearbeiten <AiOutlineEdit className='ml-3' /></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyCars