import React from 'react'
import { GrLocation } from 'react-icons/gr'
import Filter from '../../Components/Filter'
import FilterDropDown from '../../Components/FilterDropDown'
import filter_alt from '../../assets/filter_alt.png'
import CarCard from '../../Components/CarCard'



const cars = [
  {name : 'Tesla', img : 'https://i.ibb.co/S3cY7Ct/tesla.png', id : 1},
  {name : 'Tesla', img : 'https://i.ibb.co/xFdLNkM/Image-Placeholder-2.png', id :2},
  {name : 'Tesla', img : 'https://i.ibb.co/VxHD9nJ/Image-Placeholder-3.png', id : 3},
  {name : 'Tesla', img : 'https://i.ibb.co/8dn6DTz/Image-Placeholder-1.png', id : 4},
]

const CarList = () => {
  return (
    <div style={{overflowY : 'hidden',height : '100vh'}}>
      <div className='flex justify-around items-center mt-5'>
        <div className='flex justify-center items-center mt-1'>
          <div className='bg-white'>
            <p className='text-sm text-black flex items-center border border-gray-300 rounded-md p-2'><GrLocation /> Aktueller Standort</p>
          </div>
          <Filter />
        </div>
        <div className='bg-black p-3 rounded-lg'>
          <img className='' src={filter_alt} />
        </div>
      </div>
      <div className='mx-4 my-5 flex justify-between	'>
        <FilterDropDown />
        <div className='flex items-center justify-between	'>
          <p>Sofortbuchung</p>
          
          <div >
            <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#73D13D] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#73D13D]"></div>
            </label>
          </div>
        </div>
      </div>
      <div className='mx-4 h-3/4	' style={{overflowY : 'scroll'}}>
        {
          cars.map((car) => (
            <CarCard key={car.id} car={car}/>
          ))
        }
      </div>
    </div>
  )
}

export default CarList