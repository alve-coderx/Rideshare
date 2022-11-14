import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GrLocation } from 'react-icons/gr';
import filter_alt from '../../assets/filter_alt.png';
import { Filter, FilterDropDown, CarCard, BaseCard } from '../../Components';
import { cars } from '../../fakeDB/cars';




const CarList = () => {


  return (
    <div style={{ overflow: 'auto', height: '90vh' }}>
      <div className='flex justify-around items-center my-10 relative'>
        <div className='flex justify-around items-center w-full lg:px-72 md:px-10 px-8 rounded-l-2xl absolute '>
          <div className='bg-white bg-[white] rounded-l-xl w-full shadow-xl '>
            <p className='text-[13px] font-[600] text-[#1E2024] rounded-l-xl flex items-center p-4 '><GrLocation className='mx-5'/> Aktueller Standort</p>
          </div>
          <Filter />
        </div>
        <div className='bg-black p-3 rounded-lg shadow-lg'>
          <img src={filter_alt} />
        </div>
      </div>
      <div className='lg:px-72 md:px-10 px-8'>
        <div className=' my-5 flex justify-between'>
          <FilterDropDown />
          <div className='flex items-center justify-between	'>
            <p className='mr-1 lg:text-[12px] md:text-[12px] text-[10px]'>Sofortbuchung</p>
            <div>
              <label className="inline-flex relative items-center cursor-pointer mt-2">
                <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#73D13D]"></div>
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className='grid grid-cols-1 pb-5 lg:grid-cols-2 md:grid-cols-2 gap-6 ' >
            {
              cars.map((car) => (
                <BaseCard key={car.id} link={`/car/${car.id}`} image={car.img} primaryTag='20 km' secondaryTag='4.0' title="Tesla" subTitle='Model 3' price='30 €' hours='für 2 std' />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarList