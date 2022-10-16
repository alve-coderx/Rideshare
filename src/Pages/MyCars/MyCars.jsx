import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BaseCard } from '../../Components';

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
                        <BaseCard key={index} image='https://i.ibb.co/8dn6DTz/Image-Placeholder-1.png' edit={true} title='Tesla' subTitle='Model 3'/>
                    ))
                }
            </div>
        </div>
    )
}

export default MyCars