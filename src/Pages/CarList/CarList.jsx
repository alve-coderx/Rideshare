import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GrLocation } from 'react-icons/gr';
import filter_alt from '../../assets/filter_alt.png';
import { Filter, FilterDropDown, CarCard, BaseCard } from '../../Components';
import { cars } from '../../fakeDB/cars';




const CarList = () => {
  const [vehicles, setVehicle] = useState()
  const header = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }
  }
  useEffect(() => {
    fetch(`http://cardome.azurewebsites.net/api/vehicle`, header)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])


  return (
    <div style={{ overflowY: 'hidden', height: '100vh' }}>
      <div className='flex justify-around items-center mt-5 '>
        <div className='flex justify-center items-center mt-1 '>
          <div className='rounded-l-xl bg-white lg:w-[500px]'>
            <p className='text-[14px] rounded-l-xl font-[500] text-black flex items-center p-2'><GrLocation /> Aktueller Standort</p>
          </div>
          <Filter />
        </div>
        <div className='bg-black p-3 rounded-lg shadow-lg'>
          <img src={filter_alt} />
        </div>
      </div>
      <div className='mx-4 my-5 flex justify-between'>
        <FilterDropDown />
        <div className='flex items-center justify-between	'>
          <p className='mr-1'>Sofortbuchung</p>
          <div>
            <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#73D13D]"></div>
            </label>
          </div>
        </div>
      </div>
      <div className='mx-4 h-3/4 pb-16 ' style={{ overflowY: 'scroll' }}>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

          {
            cars.map((car) => (
              <BaseCard key={car.id} link={`/car/${car.id}`} image={car.img} primaryTag='20 km' secondaryTag='4.0' title="Tesla" subTitle='Model 3' price='30 €' hours='für 2 std' />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CarList