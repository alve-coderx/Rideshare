import React from 'react'
import { BaseCard } from '../../../Components'
import { cars } from '../../../fakeDB/cars';

const RentalRoles = () => {
  return (
    <div className='mx-5 lg:mx-20 mt-5 pb-16 h-5/6' style={{ overflowY: 'scroll' }}>
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