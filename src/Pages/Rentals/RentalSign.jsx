import React from 'react';
import CanvasDraw from "react-canvas-draw";
import { Link } from 'react-router-dom';

const RentalSign = () => {
    return (
        <div>
            <div className='flex mx-5 mt-8 justify-between '>
                <Link to='/rental/contract'>
                    <p className='text-[#7D7AFF] text-[500] text-[16px]'>zurück</p>
                </Link>
                <p className='font-[600] text-[14px] '>
                    Unterschrift
                </p>
                <p className='text-[#7D7AFF] text-[500] text-[16px]'>löschen</p>
            </div>
            <div className='mx-5 mt-5 font-[400]'>
                <p className='text-[12px]'>Ich, Max Mustermann, akzeptiere den <span className='text-[#7D7AFF]'>Mietvertrag</span> und die <span className='text-[#7D7AFF]'>Mietbedingungen</span>, und ich verstehe, dass Cardome mein Konto dementsprechend belasten kann</p>
            </div>
            <div className='mx-5 shadow-xl mt-5'>
                <CanvasDraw
                    canvasWidth={330}
                    hideGrid={true}
                    brushRadius={2}
                    brushColor='black'
                    canvasHeight={400}
                />
            </div>
            <div className='mx-auto right-0 left-0 bottom-2 absolute w-[92%]'>
                <button className="mt-10 bg-[#1E2024] text-white py-4 px-4 rounded-lg w-full">
                    Unterschrift bestätigen
                </button>
            </div>
        </div>
    )
}

export default RentalSign