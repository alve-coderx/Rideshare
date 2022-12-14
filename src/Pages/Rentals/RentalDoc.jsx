import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { Link } from 'react-router-dom';
import rental_sign from '../../assets/rental_sign.png';
import addImg from '../../assets/addImg.png'
import { TypeWrapper } from '../../Components';
const RentalDoc = () => {
    const style = {
        bolcdText: 'text-[#636B75] text-[10px] font-[600] mt-3',
        wrapper: 'w-full text-center bg-[#E6E6FF] flex items-center justify-center rounded-2xl shadow-sm px-2 py-8 mt-2',
        input: 'p-3 bg-white rounded-xl shadow-2xl mt-2 block w-full text-sm rounded-lg dark:placeholder-[#7D7AFF] ',
        primary: 'text-[#7D7AFF] text-center text-[32px] font-[400]',
        secondary: 'text-white font-[500] text-[16px]'
    }
    return (
        <div>
            <div className='bg-[#1E2024] '>
                <div className='flex mx-5 lg:mx-64 pt-5 justify-between ' >
                    <Link to='/startsite/rentals'>
                        <p className={style.secondary}>schließen</p>
                    </Link>
                    <Link to='/create/rent'>
                        <p className={style.secondary}>weiter</p>
                    </Link>
                </div>
                <div className='mx-5 flex flex-col justify-center items-center text-center pb-3 mt-5'>
                    <img className='w-54' src={rental_sign} />
                    <p className='text-white mt-3 font-[400] w-64 text-[13px]'>Mache Fotos des  <span className='text-[#7D7AFF]'>Führerscheins</span>des Mieters und überprüfe die unten stehenden Kästchen </p>
                </div>
            </div>
            <div className='mx-5 lg:mx-96 mt-5 mb-4'>
                <p className='text-[#636B75] text-[13px] font-[600]'>Bilder des Führerscheins</p>
                <div className='flex justify-between py-4'>
                    <div>
                        <div>
                            <img src={addImg} className='w-[42rem] px-2' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={addImg} className='w-[42rem] px-2' />
                        </div>
                    </div>

                </div>
                <p className='mt-3 text-[14px] text-[#636B75]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, eget quam quis a. Est vivamus semper gravida</p>
                <TypeWrapper icon={true} title='Führerscheinnummer' placeholder="J17003WaM41" style={style} />
                <TypeWrapper icon={true} title='Datum der Erstausstellung des Führerscheins' placeholder="02.12.2013" style={style} />
                <TypeWrapper icon={true} title='Geburtstag' placeholder="27.11.1996" style={style} />
                <div className='flex items-center bg-[#FFFBE6] rounded-lg shadow-xl py-4 mt-5 px-1'>
                    <p className='lg:px-10 md:px-10 px-5'> <AiOutlineInfoCircle className='text-black text-[30px]' /></p>
                    <p className='text-[#838D95] lg:text-[14px] md:text-[14px] text-[12px] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dictum tortor odio at. Feugiat sapien orci imperdiet nisi, venenatis, tincidunt. Dui semper amet leo, nulla. Bibendum purus,</p>
                </div>
            </div>
        </div>
    )
}

export default RentalDoc