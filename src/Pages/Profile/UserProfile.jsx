import React from 'react'
import { AiFillStar, AiOutlineRight } from 'react-icons/ai'
import avater from '../../assets/avater.png'
import op1 from '../../assets/op1.png'
import op2 from '../../assets/op2.png'
import op3 from '../../assets/op3.png'
import op4 from '../../assets/op4.png'

const UserProfile = () => {
    return (
        <div >
            <div>
                <p className='z-10 absolute top-10 left-5 text-[#7D7AFF]'>zurück</p>
                <span className='z-10 absolute top-10 right-5 bg-[#FFC53D] text-white text-sm flex items-center rounded-lg px-3 py-1'><AiFillStar /> 5.0</span>
            </div>
            <div className='flex flex-col items-center justify-center mt-10 mx-5'>
                <img className='mt-3' src={avater} />
                <p className='mt-3 font-black text-sm'>Vorname Nachname</p>
                <button className="mt-3 bg-[#7D7AFF] w-32 hover:bg-blue-700 text-white text-[11px] font-bold py-2 px-4 rounded-lg w-full">
                    Profil bearbeiten
                </button>
            </div>
            <div style={{ overflowY: 'scroll', maxHeight: 'auto'  }}> 
                <div className='mx-5' >
                    <p className='mt-3 font-black text-sm'>Zahlungen</p>
                    <div className='flex items-center justify-between bg-white px-2 py-2 rounded-xl shadow-lg mt-2'>
                        <div className='flex items-center '>
                            <img className='mr-2 ' src={op1} />
                            <p className='text-black text-[12px]'>zurück</p>
                        </div>
                        <AiOutlineRight />
                    </div>
                    <div className='flex items-center justify-between bg-white px-2 py-2 rounded-xl shadow-lg mt-2'>
                        <div className='flex items-center '>
                            <img className='mr-2 ' src={op2} />
                            <p className='text-black text-[12px]'>Zahlungsbelege</p>
                        </div>
                        <AiOutlineRight />
                    </div>
                    <div className='flex items-center justify-between bg-white px-2 py-2 rounded-xl shadow-lg mt-2'>
                        <div className='flex items-center '>
                            <img className='mr-2 ' src={op3} />
                            <p className='text-black text-[12px]'>Zahlungsart angeben</p>
                        </div>
                        <AiOutlineRight />
                    </div>
                </div>
                <div className='mx-5 '>
                    <p className='mt-3 font-black text-sm'>Einstellungen</p>
                    <div className='flex items-center justify-between bg-white px-2 py-2 rounded-xl shadow-lg mt-2'>
                        <div className='flex items-center '>
                            <img className='mr-2 ' src={op4} />
                            <p className='text-black text-[12px]'>Sprache</p>
                        </div>
                        <AiOutlineRight />
                    </div>
                    <div className='flex items-center justify-between bg-white px-2 py-4 rounded-xl shadow-lg mt-2'>
                        <div className='flex items-center '>
                            <p className='text-black text-[12px]'>Impressum</p>
                        </div>
                        <AiOutlineRight />
                    </div>
                    <div className='flex items-center justify-between bg-white px-2 py-4 rounded-xl shadow-lg mt-2'>
                        <div className='flex items-center '>
                            <p className='text-black text-[12px]'>Rechtliches</p>
                        </div>
                        <AiOutlineRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile