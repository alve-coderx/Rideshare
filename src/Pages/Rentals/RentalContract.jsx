import React from 'react'
import { Link } from 'react-router-dom'

const RentalContract = () => {
  return (
    <div>
      <div className='mx-5 mt-8 flex items-center'>
        <p className='text-[#7D7AFF] text-[500] text-[16px]'>zurück</p>
        <p className='font-[600] text-[14px] ml-16'>
          Mietvertrag
        </p>
      </div>
      <div style={{overflowY : 'scroll',maxHeight : '80vh'}}>
        <div className='mx-5 mt-5'>
          <div className='relative'>
            <p className='text-[black] text-[13px] font-[600] mt-3'>Zahlungen</p>
            <div className='relative'>
              <input id="message" rows="4" className="p-3 bg-white rounded-xl shadow-2xl mt-2 block w-full text-[12px] rounded-lg dark:placeholder-[black] " placeholder="Kraftstofftyp" />
              <p className='absolute text-[#838D95] text-[12px] right-2 top-3'>Diesel</p>
            </div>
            <div className='relative'>
              <input id="message" rows="4" className="p-3 bg-white rounded-xl shadow-2xl mt-2 block w-full text-[12px] rounded-lg dark:placeholder-[black] " placeholder="Tankstand" />
              <p className='absolute text-[#838D95] text-[12px] right-2 top-3'>75%</p>
            </div>
            <div className='relative'>
              <input id="message" rows="4" className="p-3 bg-white rounded-xl shadow-2xl mt-2 block w-full text-[12px] rounded-lg dark:placeholder-[black] " placeholder="Kilometerstand" />
              <p className='absolute text-[#838D95] text-[12px] right-2 top-3'>25 000 km</p>
            </div>
          </div>
        </div>
        <div className='mx-5 mt-5'>
          <div className='relative'>
            <p className='text-[black] text-[13px] font-[600] mt-3'>Zustand von außen</p>
            <div className='relative'>
              <input id="message" rows="4" className="p-3 bg-white rounded-xl shadow-2xl mt-2 block w-full text-[12px] rounded-lg dark:placeholder-[black] " placeholder="Bsp" />
            </div>
          </div>
        </div>
        <div className='mx-5 mt-5'>
          <div className='relative'>
            <p className='text-[black] text-[13px] font-[600] mt-3'>Zustand von innen</p>
            <div className='relative'>
              <input id="message" rows="4" className="p-3 bg-white rounded-xl shadow-2xl mt-2 block w-full text-[12px] rounded-lg dark:placeholder-[black] " placeholder="Bsp" />
            </div>
          </div>
        </div>
        <div className='mx-5 mt-5'>
          <div className='relative'>
            <p className='text-[black] text-[13px] font-[600] mt-3'>Anmietung</p>
            <div className='relative'>
              <input id="message" rows="4" className="p-3 bg-white rounded-xl shadow-2xl mt-2 block w-full text-[12px] rounded-lg dark:placeholder-[black] " placeholder="Start" />
              <p className='absolute text-[#838D95] text-[12px] right-2 top-3'>13/10/2022 21:10</p>
            </div>
            <div className='relative'>
              <input id="message" rows="4" className="p-3 bg-white rounded-xl shadow-2xl mt-2 block w-full text-[12px] rounded-lg dark:placeholder-[black] " placeholder="Geschätztes Ende" />
              <p className='absolute text-[#838D95] text-[12px] right-2 top-3'>21/10/2022 21:10</p>
            </div>
            <div className='relative'>
              <input id="message" rows="4" className="p-3 bg-white rounded-xl shadow-2xl mt-2 block w-full text-[12px] rounded-lg dark:placeholder-[black] " placeholder="Kilometer inklusive" />
              <p className='absolute text-[#838D95] text-[12px] right-2 top-3'>200km (danach 0,38 € / km)</p>
            </div>
          </div>
        </div>

      </div>
      <div className='mx-auto right-0 left-0 bottom-2 absolute w-[92%]'>
        <Link to='/rental/sign'>
        <button className="mt-10 bg-[#1E2024]  text-white py-4 px-4 rounded-lg w-full">
          Unterschreibe den Mietvertrag
        </button>
        </Link>
      </div>
    </div>
  )
}

export default RentalContract