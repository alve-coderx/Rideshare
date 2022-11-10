import React from 'react';
import avater from '../../../assets/avater.png';
import { BaseCard } from '../../../Components';

const LandlordRole = ({ active }) => {
    return (
        <div className='mt-5 pb-16 h-5/6' style={{ overflowY: 'scroll' }}>
            {
                active === 1 ?
                    (
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            {
                                [1, 2, 3].map((index) => (
                                    <BaseCard key={index} image={avater} title='Thomas' datePicker={true} subLink='Antworten' link={`/rent/${index}`} rentPrice='20 €'/>
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