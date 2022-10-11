import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import avater from '../../assets/avater.png'
const FinishedPage = () => {
  return (
    <div>
      <div className='mx-5 mt-5'>
        <p className='flex justify-between text-[14px] font-[600]'><span className='text-[#7D7AFF]'>fertig</span><span>Anmietung #2395753</span><span className='text-[#7D7AFF]'>hilfe</span></p>
        <li className='text-[#636B75] text-[12px] font-[400] mt-5 mx-1 w-92'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, tincidunt quisque mattis risus.</li>
        <li className='text-[#636B75] text-[12px] font-[400] mt-5 mx-1 w-92'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, tincidunt quisque mattis risus.</li>
        <button className="mt-10 bg-[#1E2024] hover:bg-blue-700 text-white py-4 px-4 rounded-lg w-full">
          Beginne die Anmietung
        </button>
      </div>
      <div className='mx-5 mt-5'>
        <div className='flex justify-between bg-white rounded-lg shadow-xl p-3 mt-3'>
          <p className='text-[black] text-[12px] font-[600]'>Verlängere die Anmietung oder passe sie an</p>
          <p className='flex items-center text-[black] text-[13px] font-[600]'><AiOutlineArrowRight /> </p>
        </div>
        <div className='flex justify-between bg-white rounded-lg shadow-xl p-3 mt-3'>
          <p className='text-[black] text-[12px] font-[600]'>Die Anmietung stornieren</p>
          <p className='flex items-center text-[black] text-[13px] font-[600]'><AiOutlineArrowRight /> </p>
        </div>
        <div className='flex justify-between bg-white rounded-lg shadow-xl p-3 mt-3'>
          <p className='text-[black] text-[12px] font-[600]'>Auto wechseln</p>
          <p className='flex items-center text-[black] text-[13px] font-[600]'><AiOutlineArrowRight /> </p>
        </div>
      </div>
      <div className='mx-5 mt-5'>
        <p className='flex justify-between text-[14px] font-[600]'>Oft genutzte Funktionen</p>
        <div className='bg-white relative rounded-lg shadow-lg mt-2 p-4 flex item-center'>
          <img  src={avater} />
          <div className='ml-5'>
            <p className='font-[900] '>Thomas </p>
            <p className='font-[400] text-[#636B75] text-[12px]'>Nachricht</p>
          </div>
          <span className='absolute top-2 right-2 font-[400] text-[#636B75] text-[12px]'>18 März 18:40</span>
          <span className='flex items-center absolute bottom-2 right-2 font-[600] text-[12px]'>Alle ansehen und antworten <AiOutlineArrowRight /></span>
        </div>
      </div>
      <div className='mx-5 mt-5 mb-3'>
        <p className='flex justify-between text-[14px] font-[600]'>Mieter</p>
        <div className='bg-[#7D7AFF] flex justify-between rounded-lg shadow-lg mt-2 p-4 flex item-center'>
          <div className='flex items-center'>
            <img className='border-2 rounded-3xl' src={avater} />
            <div className='ml-5'>
              <p className='font-[900] text-[white] '>Thomas </p>
            </div>
          </div>
          <span className='flex items-center font-[900] text-[white] '><AiOutlineArrowRight /></span>
        </div>
      </div>
    </div>
  )
}

export default FinishedPage