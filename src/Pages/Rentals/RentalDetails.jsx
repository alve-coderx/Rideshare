import React from 'react';
import { useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';
import avater from '../../assets/avater.png';
import car from '../../assets/tesla.png';

const RentalDetails = () => {
    const [active, setActive] = useState(1)
    const clickHandler = (index) => {
        setActive((prev) => {
            return prev === index ? null : index;
        });

    };
    const navigators = [
        { name: 'Bestätigung', id: 1 },
        { name: 'Nachrichten', id: 2 },
    ]
    return (
        <div>
            <div className='bg-white px-9 py-5'>
                <div>
                    <div className='flex items-center '>
                        <Link to='/startsite/rentals'>
                            <p className='text-[#7D7AFF] text-[500] text-[16px]'>zurück</p>
                        </Link>
                        <div className='flex items-center ml-16'>
                            <img src={avater} />
                            <h1 className='font-[600] text-[14px] ml-5'>
                                Thomas
                                <p className='text-[#AAAFB6] text-[12px]'>Online</p>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-200 flex justify-evenly mx-14 mt-8  shadow-sm rounded-lg py-1'>
                    {
                        navigators.map((element) => <p key={element.id} onClick={() => clickHandler(element.id)} className={active === element.id ? 'font-[600] text-[11.346px] bg-white py-2 px-3 text-[#7D7AFF] rounded-lg' : 'py-2 px-3 text-[11.346px] text-black'}>{element.name}</p>)
                    }
                </div>
            </div>
            <div className='mx-5 mt-5 flex flex-col items-center' style={{ overflowY: 'scroll' }}>
                <p className='text-[24px] text-center font-[600]'>Anfrage von <span className='text-[#7D7AFF]'>Thomas</span></p>
                <img src={car} className='w-[302px] h-[208px] mt-3' />
            </div>
            <div className='mx-5 mt-5'>
                <div className='flex justify-between' >
                    <div>
                        <p className='text-[32px] font-[600]'>Tesla </p>
                        <span className='text-[10px] text-[#838D95]'>Model 3</span>
                    </div>
                    <p className='text-[32px] font-[600]'>30 € </p>
                </div>
                <p className='bg-slate-200 text-[10px] mb-5 w-40 font-[600] flex items-center rounded-lg px-2 py-2  mt-3'><MdDateRange className='mr-1' /> Do. 23. Juni  14:00 - 17:00</p>
            </div>
            <div className='mx-auto right-0 left-0 bottom-2 absolute w-[92%] flex justify-around'>
                <Link to='/rental/overview'>
                    <button className="mt-10 bg-[#7D7AFF] text-[14px] font-[500] text-white py-3 px-6 rounded-lg">
                        Akzeptieren
                    </button>
                </Link>
                <Link to='/startsite/rentals'>
                    <button className="mt-10 bg-[#1E2024] text-[14px] font-[500] text-white py-3 px-6 rounded-lg">
                        Ablehnen
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default RentalDetails