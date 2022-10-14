import React from 'react'
import avater from '../../assets/avater.png'
import './style.css'
import { MdDateRange } from 'react-icons/md'
import { useState } from 'react'
import useSupplier from '../../Hook/useSupplier'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Message = () => {
    const [msg, setMsg] = useState("");
    const { handleMessage } = useSupplier();
   
    return (
        <div>
            <div className='flex flex-col items-center justify-center mt-3 mx-5'>
                <p className='bg-black p-2 rounded-xl absolute top-2 right-2'>
                    <Link to={`/car/1`}>
                        <AiOutlineClose className='font-[900] text-[white] text-[20px]' />
                    </Link>
                </p>
                <img className='mt-3' src={avater} />
                <p className='mt-3 font-black text-sm text-center'>Schreibe <span className='text-[#7D7AFF]'>Thomas</span>  eine <br /> Nachricht</p>
                <div onBlur={(e) => setMsg(e.target.innerHTML)} contentEditable="true" className="mt-5 shadow-xl rounded-xl speech bubble w-full pt-3 pb-24 px-2">Hey...</div>
            </div>

            <div className='mx-5 mt-6'>
                <p className='mt-3 font-black text-sm'>Zeitangaben</p>
                <p className='bg-[#FFC53D] text-[14px] text-[400] flex items-center rounded-lg px-2 py-2 w-52 mt-3'><MdDateRange className='mr-1' /> Do. 23. Juni  14:00 - 17:00</p>
                <p className='underline text-[10px] mt-3'>ändern</p>
            </div>
            <div className='mx-5 mt-10'>
                <p className='font-black text-sm'>Ergänzungen zu Zeit und Ortt</p>
                <textarea id="message" rows="4" className="p-3 bg-[#D8DBEC] rounded-xl shadow-2xl mt-5 block w-full text-sm rounded-lg border border-gray-300 dark:placeholder-gray-400 " placeholder="Wie flexibel bist du? Mögliche Einschränkungen (Optional)"></textarea>
            </div>
            <div className='mx-auto right-0 left-0 bottom-2 absolute w-[92%]'>
                <button onClick={() => handleMessage(msg)} type='submit' className="mt-10 bg-[#7D7AFF] text-white py-4 px-4 rounded-lg w-full">
                    Nachricht senden
                </button>
            </div>
            
        </div>
    )
}

export default Message