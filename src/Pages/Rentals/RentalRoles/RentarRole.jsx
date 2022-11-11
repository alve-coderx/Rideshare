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
  const texts = [{name : "Bevorstehend",id :1},{name : "Abgeschlossen",id :2}]
  return (
    <div className=' mt-20 pb-16 h-5/6' style={{ overflowY: 'auto' }}>
      <div className='bg-white flex justify-center'>
          {texts.map((index) => <p key={index.id} className={active === index.id ? 'p-2 text-[#7D7AFF] underline underline-offset-1	' : 'p-2 text-[#838D95]'} onClick={() => clickHandler(index.id)}>{index.name}</p>)}
      </div>
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