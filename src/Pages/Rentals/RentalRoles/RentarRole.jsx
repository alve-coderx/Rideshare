import React from 'react'
import { CarCard } from '../../../Components'
import { cars } from '../../../fakeDB/cars';

const RentalRoles = () => {
  return (
    <div className='mx-5 mt-5 pb-16 h-5/6' style={{ overflowY: 'scroll' }}>
      <div className='mx-4 ' >
        {
          cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))
        }
      </div>
    </div>
  )
}

export default RentalRoles