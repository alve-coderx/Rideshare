import React from 'react';
import avater from '../../assets/avater.png';
import './style.css';
import { useState } from 'react';
import useSupplier from '../../Hook/useSupplier';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { DatePicker } from '../../Components';

const Message = () => {
    const [msg, setMsg] = useState("");
    // const { handleMessage } = useSupplier();
    const style = {
        mesage: 'shadow-xl rounded-[20px] speech  pt-5 px-5 pb-24 px-2 w-64 lg:w-96 md:w-96'
    }
    return (
        <div className='lg:mx-[35rem] md:mx-32 mx-8'>
            <div className='flex  items-center justify-between mt-10 '>
                <p>.</p>
                <div className='flex flex-col items-center justify-start'>
                    <img className='pb-2' src={avater} />
                    <p className='font-black text-lg text-center'>Schreibe <span className='text-[#7D7AFF]'>Thomas</span>  eine <br /> Nachricht</p>
                </div>
                <p className='bg-black p-2 rounded-xl shadow-lg mb-10'>
                    <Link to={`/car/1`}>
                        <AiOutlineClose className='font-[900] text-[white] text-[20px]' />
                    </Link>
                </p>
            </div>
            <div className='mt-10'>
                <div className='relative'><div contentEditable='true' className={style.mesage} placeholder='Hey...'></div></div>
                <div className='pt-44'>
                    <p className='mt-3 font-black text-lg'>Zeitangaben</p>
                    <DatePicker color='#FFC53D' />
                    <p className='underline text-[10px] my-5'>ändern</p>
                </div>
                <div className=''>
                    <p className='font-black text-sm'>Ergänzungen zu Zeit und Ortt</p>
                    <textarea id="message" rows="4" className="p-3 lg:w-[30rem] md:w-96 w-64 bg-[#D8DBEC] rounded-xl shadow-2xl mt-5 block w-full text-sm rounded-lg border border-gray-300 dark:placeholder-gray-400 " placeholder="Wie flexibel bist du? Mögliche Einschränkungen (Optional)"></textarea>
                </div>
            </div>
            <div className='mx-auto right-0 left-0 bottom-4 absolute w-[92%] lg:w-[32%] md:w-[52%]'>
                <Link to='/user/1/inbox'>
                    <button type='submit' className="mt-10 bg-[#7D7AFF] text-white py-5 px-4 rounded-lg w-full">
                        Nachricht senden
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Message