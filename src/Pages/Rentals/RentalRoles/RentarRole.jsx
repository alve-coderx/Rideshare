import React from 'react'
import { RenatalCard } from '../../../Components'
import { cars } from '../../../fakeDB/cars';

const RentalRoles = () => {
  return (
    <div className='mx-5 mt-5 pb-16 h-5/6' style={{ overflowY: 'scroll' }}>
      <div className='mx-4 ' >
        {
          cars.map((car) => (
            <RenatalCard key={car.id} car={car} />
          ))
        }
      </div>
    </div>
  )
}

export default RentalRoles