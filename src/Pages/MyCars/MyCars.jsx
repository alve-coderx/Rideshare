import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BaseCard } from '../../Components';

const MyCars = () => {
    return (
        <div className='mx-5 lg:mx-80' style={{overflow : 'hidden', height : '100vh'}}>
            <div className='text-center my-5'>
                <p className='font-[600] text-[24px]'>Meine Autos</p>
            </div>
            <div className='mt-y'>
                <Link to={`/createcar`}>
                    <p className='flex items-center border-[2px] border-[#52C41A] px-5 justify-center rounded-lg py-3'><AiOutlinePlusCircle className='mr-5 text-[#52C41A] text-lg' /> Fahrzeug hinzufügen</p>
                </Link>
            </div>
            <div className='mt-5 lg:pb-0 md:pb-0 pb-28 h-5/6' style={{ overflowY: 'auto' }}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6' >
                    {
                        [1, 2, 3, 4].map((index) => (
                            <BaseCard key={index} image='https://i.ibb.co/8dn6DTz/Image-Placeholder-1.png' edit={true} title='Tesla' subTitle='Model 3' />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MyCars