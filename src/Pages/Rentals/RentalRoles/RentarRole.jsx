import React from 'react'
import { useState } from 'react';
import { BaseCard } from '../../../Components'
import { cars } from '../../../fakeDB/cars';

const RentalRoles = () => {
  const [active, setActive] = useState(1)
  const clickHandler = (index) => {
    setActive((prev) => {
        return prev === index ? null : index;
    });
};
  return (
    <div className=' mt-20 pb-16 h-5/6' style={{ overflowY: 'auto' }}>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {
          cars.map((car) => (
            <BaseCard key={car.id} iconTag={car.icon} tagBg={car.tagBg} image={car.img} title={car.name} subTitle="Model 3" datePicker={true} link='/rental/start' />
          ))
        }
      </div>
    </div>
  )
}

export default RentalRoles