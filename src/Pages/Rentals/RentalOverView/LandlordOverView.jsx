import React from 'react'
import { AiOutlineArrowRight, AiOutlineInfoCircle } from 'react-icons/ai'
import { BiImages } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'
import avater from '../../../assets/avater.png';

const LandlordOverView = () => {
    const style = {
        inputNm: 'p-3 bg-white rounded-xl shadow-2xl font-[500] mt-2 block w-full text-[12px] dark:placeholder-[black]'
    }
    return (
        <div>
            <div>
                <div className='text-center pt-5 ' >
                    <p className='text-black font-[600] text-[16px]'>Anmietung #2395753</p>
                </div>
                <div className='bg-white rounded-lg shadow-lg mt-2 mx-5 p-4 flex items-center relative'>
                    <img className='w-[50px] h-[50px]' src={avater} />
                    <div className='ml-5'>
                        <p className='font-[900] '>Auto Name</p>
                        <p className='text-[12px] text-[#AAAFB6] text-[400] flex items-center rounded-lg'>5. April 2022 um 12:00  6.April 2022 um 12:00</p>
                        <span className='flex items-center text-[#AAAFB6] text-[10px] font-[600]  absolute right-3 top-4'>WIEs4718</span>
                    </div>
                </div>
            </div>
            <div className='mx-5 mt-5 mb-4'>
                <p className='text-[13px] font-[600]'>Preis</p>
                <div className='relative'>
                    <input id="message" rows="4" className={style.inputNm} placeholder="1 Tage (incl. 200km)" />
                    <span className='absolute right-2 top-3'>15 €</span>
                </div>
                <div className='relative'>
                    <input id="message" rows="4" className={style.inputNm} placeholder="Servicegebühr (25%)" />
                    <span className='absolute right-2 top-3'>-3,75 €</span>
                </div>
                <div className='relative'>
                    <input id="message" rows="4" className="p-3 bg-white rounded-xl shadow-2xl mt-2 block w-full text-[13px] font-[600] rounded-lg dark:placeholder-[black] " placeholder="Deine Einnahmen" />
                    <span className='absolute right-2 top-3 text-[#7D7AFF]'>11,25 €</span>
                </div>
            </div>
            <div className='mx-5'>
                <p className='text-[13px] font-[600]'>Abgeschlossene Anmietung</p>
                <p className='text-[12px] text-[#AAAFB6] text-[400] flex items-center rounded-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, eget quam quis a. Est vivamus semper gravida</p>
            </div>
            <div className='mx-5 mt-5'>
                <p className='text-[13px] font-[600]'>Oft genutzte Funktionen</p>
                <div className='relative'>
                    <input id="message" rows="4" className={style.inputNm} placeholder="1 Tage (incl. 200km)" />
                    <AiOutlineArrowRight className='absolute right-2 top-3' />
                </div>
                <div className='relative'>
                    <input id="message" rows="4" className={style.inputNm} placeholder="rafzettel erhalten während der Anmietung" />
                    <AiOutlineArrowRight className='absolute right-2 top-3' />
                </div>
            </div>
            <div className='mx-5 mt-5'>
                <p className='text-[13px] font-[600]'>Nachrichten</p>
                <div className='bg-white rounded-lg shadow-lg mt-2 mx-5 p-4 flex items-center relative'>
                    <img className='w-[50px] h-[50px]' src={avater} />
                    <div className='ml-5'>
                        <p className='font-[900] '>Auto Name</p>
                        <p className='text-[12px] text-[#AAAFB6] text-[400] flex items-center rounded-lg'>Hallo </p>
                        <span className='flex items-center text-[#AAAFB6] text-[10px] font-[600]  absolute right-3 top-4'>18 März 18:40</span>
                        <span className='flex items-center text-[black] text-[10px] font-[600]  absolute right-3 bottom-2'>Alle ansehen und antwortenc<AiOutlineArrowRight /></span>
                    </div>
                </div>
            </div>
            <div className='mx-5 my-5'>
                <p className='text-[13px] font-[600]'>Mieter</p>
                <div className='bg-[#7D7AFF] rounded-lg shadow-lg mt-2 mx-5 p-4 flex items-center relative'>
                    <img className='w-[50px] h-[50px]' src={avater} />
                    <div className='ml-5'>
                        <p className='font-[600] text-white'>Max</p>
                    </div>
                    <AiOutlineArrowRight className='absolute right-4 top-8 text-white' />

                </div>
            </div>
        </div>
    )
}

export default LandlordOverView