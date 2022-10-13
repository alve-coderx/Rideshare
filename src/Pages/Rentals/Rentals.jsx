import React from 'react';
import { useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import avater from '../../assets/avater.png';
import { Link } from 'react-router-dom';
import { CarCard } from '../../Components';
import {cars} from '../../fakeDB/cars';

const Rentals = () => {
    const [active, setActive] = useState(1)
    const clickHandler = (index) => {
        setActive((prev) => {
            return prev === index ? null : index;
        });
    };
    const navigators = [
        { name: 'Bevorstehend', id: 1 },
        { name: 'Laufend', id: 2 },
        { name: 'Abgeschlossen', id: 3 },
    ];

    return (
        <div style={{overflow : 'hidden', height : '100vh'}}>
            <div className='bg-slate-200 flex justify-between mx-5 mt-8 shadow-sm rounded-lg px-2 py-1'>
                {
                    navigators.map((element) => <p key={element.id} onClick={() => clickHandler(element.id)} className={active === element.id ? 'font-[600] text-[11.346px] bg-white py-1 px-2 text-[#7D7AFF] rounded-lg' : 'py-1 px-2 text-[11.346px] text-black'}>{element.name}</p>)
                }
            </div>
            <div className='mx-5 mt-5 pb-16 h-5/6' style={{overflowY :'scroll'}}>
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
                        active === 3 ?
                            (
                                <div className='mx-4 ' >
                                    {
                                        cars.map((car) => (
                                            <CarCard key={car.id} car={car} />
                                        ))
                                    }
                                </div>
                            )
                            :
                            ''
                }
            </div>
        </div>
    )
}

export default Rentals