import React from 'react';
import CanvasDraw from "react-canvas-draw";
import { Link } from 'react-router-dom';

const RentalSign = () => {
    return (
        <div className=''>
            <div className='flex mt-8 justify-between mx-5 lg:mx-96'>
                <Link to='/rental/contract'>
                    <p className='text-[#7D7AFF] font-[600] text-[16px]'>zurück</p>
                </Link>
                <p className='font-[600] text-[14px] '>
                    Unterschrift
                </p>
                <p className='text-[#7D7AFF] font-[600] text-[16px]'>löschen</p>
            </div>
            <div className='mx-5 lg:mx-96'>
                <div className='mt-5 '>
                    <p className='text-[15px] font-[600]'>Ich, Max Mustermann, akzeptiere den <span className='text-[#7D7AFF]'>Mietvertrag</span> und die <span className='text-[#7D7AFF]'>Mietbedingungen</span>, und ich verstehe, dass Cardome mein Konto dementsprechend belasten kann</p>
                </div>
                <div className='mt-5 flex flex-col items-center'>
                    <CanvasDraw
                        hideGrid={true}
                        brushRadius={2}
                        brushColor='black'
                        className='shadow-xl'
                        canvasHeight={580}
                    />
                </div>
                <div className='mx-auto right-0 left-0 bottom-2 absolute w-[92%] lg:w-[32%]'>
                    <button className="mt-10 bg-[#1E2024] text-white py-4 px-4 rounded-lg w-full">
                        Unterschrift bestätigen
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RentalSign