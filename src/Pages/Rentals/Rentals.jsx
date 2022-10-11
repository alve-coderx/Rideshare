import React from 'react'
import { useState } from 'react'
import { MdDateRange } from 'react-icons/md'
import { AiOutlineArrowRight } from 'react-icons/ai'
import avater from '../../assets/avater.png'
import { Link } from 'react-router-dom'
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
    ]
    return (
        <div>
            <div className='bg-slate-200 flex justify-between mx-5 mt-8 shadow-sm rounded-lg px-2 py-1'>
                {
                    navigators.map((element) => <p onClick={() => clickHandler(element.id)} className={active === element.id ? 'font-[600] text-[11.346px] bg-white py-1 px-2 text-[#7D7AFF] rounded-lg' : 'py-1 px-2 text-[11.346px] text-black'}>{element.name}</p>)
                }
            </div>
            <div className='mx-5 mt-10'>
                {
                    [1, 2, 3].map((index) => (
                        <Link to={`/rent/${index}`}>
                            <div key={index} className='bg-white rounded-lg shadow-lg mt-2 p-4 flex item-center'>
                                <img className='w-[100px]' src={avater} />
                                <div className='ml-5'>
                                    <p className='font-[900] '>Thomas</p>
                                    <p className='bg-slate-200 text-[10px] text-[400] flex items-center rounded-lg px-2 py-2  mt-3'><MdDateRange className='mr-1' /> Do. 23. Juni  14:00 - 17:00</p>
                                    <p className='text-[10px] text-[#7D7AFF] mt-5 flex justify-between w-full'><span>20 €</span> <span className='flex items-center text-black'>Antworten <AiOutlineArrowRight className='ml-2' /></span> </p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Rentals