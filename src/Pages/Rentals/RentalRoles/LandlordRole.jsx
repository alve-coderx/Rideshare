import React from 'react';
import { useState } from 'react';
import avater from '../../../assets/avater.png';
import { BaseCard } from '../../../Components';

const LandlordRole = ({ active }) => {
    const [toggle, setToggle] = useState(1)
    const clickHandler = (index) => {
        setToggle   ((prev) => {
            return prev === index ? null : index;
        });
    };
    return (
        <div className='mt-20 pb-16 h-5/6' style={{ overflowY: 'auto' }}>
           
            {
                active === 1 ?
                    (
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            {
                                [1, 2, 3, 4, 5, 6].map((index) => (
                                    <BaseCard key={index} image={avater} title='Thomas' datePicker={true} subLink='Antworten' link={`/rent/${index}`} />
                                ))
                            }
                        </div>
                    )
                    :
                    ''
            }
        </div>
    )
}

export default LandlordRole