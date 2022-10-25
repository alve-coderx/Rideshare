import React from 'react';
import { Link } from 'react-router-dom';
import { TypeWrapper } from '../../Components';

const RentalContract = () => {
  const style = {
    text: 'absolute text-[#838D95] text-[12px] right-2 top-3',
    input: 'p-3 bg-white rounded-xl shadow-2xl mt-2 block w-full text-[12px] rounded-lg dark:placeholder-[black] " placeholder="Kraftstofftyp',
    boldText: 'text-[black] text-[13px] font-[600] mt-3'
  }
  return (
    <div>
      <div className='mt-8 mx-5 lg:mx-10 flex items-center'>
        <Link to='/create/rent'>
          <p className='text-[#7D7AFF] text-[500] text-[16px]'>zurück</p>
        </Link> 
        <p className='font-[600] text-[14px] ml-16'>
          Mietvertrag
        </p>
      </div>
      <div style={{ overflowY: 'scroll', maxHeight: '80vh' }} className='mx-5 lg:mx-10'>
        <div className=' mt-5'>
          <div className='relative'>
            <p className={style.boldText}>Zahlungen</p>
            <div className='relative'>
              <TypeWrapper style={style} placeholder='Kraftstofftyp' text='Diesel' />
            </div>
            <div className='relative'>
              <TypeWrapper style={style} placeholder='Tankstand' text='75%' />
            </div>
            <div className='relative'>
              <TypeWrapper style={style} placeholder='Kilometerstand' text='25 000 km' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <div className='relative'>
            <p className={style.boldText}>Zustand von außen</p>
            <div className='relative'>
              <TypeWrapper style={style} placeholder='Bsp' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <div className='relative'>
            <p className={style.boldText}>Zustand von innen</p>
            <div className='relative'>
              <TypeWrapper style={style} placeholder='Bsp' />

            </div>
          </div>
        </div>
        <div className='mt-5'>
          <div className='relative'>
            <p className={style.boldText}>Anmietung</p>
            <div className='relative'>
              <TypeWrapper style={style} placeholder='Start' text='13/10/2022 21:10' />
            </div>
            <div className='relative'>
              <TypeWrapper style={style} placeholder='Geschätztes Ende' text='21/10/2022 21:10' />
            </div>
            <div className='relative'>
              <TypeWrapper style={style} placeholder='Kilometer inklusive' text='200km (danach 0,38 € / km)' />
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