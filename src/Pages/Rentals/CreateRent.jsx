import React from 'react'
import filter_alt from '../../assets/cross.png'
import car from '../../assets/car.png'
import fuel from '../../assets/fuel.png'
import metar from '../../assets/metar.png'
import { useState } from 'react'
import { BiImages } from 'react-icons/bi'
import { Link } from 'react-router-dom'


const CreateRent = () => {
  const [prograss, setPrograss] = useState(33.33)
  console.log(prograss)
  return (
    <div>
      <div className='bg-[#1E2024] '>
        <div className='flex mx-5 pt-5 justify-between ' >
          <div className='bg-white p-2 rounded-lg'>
            <img src={filter_alt} />
          </div>
          {
            prograss === 99.99 ? (<Link to='/rental/contract'><p className='text-white font-[500] text-[16px]'>zurück</p></Link>)
            :(<p onClick={() => setPrograss((prevState) => prevState + 33.33)} className='text-white font-[500] text-[16px]'>zurück</p>)
          }
        </div>
        <div className='mx-5 mt-8 '>
          <div className="w-full  bg-gray-200 h-1">
            <div className="bg-[#7D7AFF] h-1" style={{ maxWidth: '100%', width: `${prograss}%` }}></div>
          </div>
        </div>
        <div className='mx-5 flex flex-col justify-center items-center text-center pb-3'>
          {
            prograss === 33.33 ?
              (
                <>
                  <img className='w-full' src={car} />
                  <p className='text-white font-[400] text-[13px]'>Mache einen <span className='text-[#7D7AFF]'>Rundgang</span> um das Auto</p>
                </>
              )
              :
              prograss === 66.66 ?
                (
                  <>
                    <img className='w-full w-52 mt-5 mb-5' src={fuel} />
                    <p className='text-white font-[400] text-[13px]'>Gib den <span className='text-[#7D7AFF]'>Kilometerstand</span> an, der auf deinem Techo angezeigt wird</p>
                  </>
                )
                :
                prograss === 99.99 ?
                  (
                    <>
                      <img className='w-52 mt-5 mb-5' src={metar} />
                      <p className='text-white font-[400] text-[13px]'>Gib den<span className='text-[#7D7AFF]'>Tankstand</span>an, der auf deiner Tankanzeige angezeigt wird</p>
                    </>
                  )
                  :
                  ''

          }
        </div>
      </div>

      {
        prograss === 33.33 ?
          (
            <div className='mx-5 mt-5 mb-4'>
              <p className='text-[#636B75] text-[13px] font-[600]'>Fotos vom Außenbereich</p>
              <div className='text-center bg-[#E6E6FF] flex items-center justify-center rounded-lg shadow-xl px-4 py-16 mt-2'>
                <p className='text-[#7D7AFF] text-center text-[32px] font-[400]'><BiImages /></p>
              </div>
              <p className='text-[#636B75] text-[13px] font-[600] mt-3'>Fotos vom Außenbereich</p>
              <textarea id="message" rows="4" className="p-3 bg-[#D8DBEC] rounded-xl shadow-2xl mt-2 block w-full text-sm rounded-lg border border-gray-300 dark:placeholder-gray-400 " placeholder="Schaden, Kratzer, Einschlag, etc."></textarea>
            </div>
          )
          :
          prograss === 66.66 ?
            (
              <div className='mx-5 mt-5 mb-4 relative'>
                <p className='text-[#636B75] text-[13px] font-[600] mt-3'>Kilometerstand</p>
                <span className='absolute right-5 top-9 font-[900]'>Km</span>
                <input id="message" rows="4" className="p-3 bg-[white] rounded-xl shadow-2xl mt-2 block w-full text-sm rounded-lg dark:placeholder-gray-400 " placeholder="1000" />
              </div>
            )
            :
            prograss === 99.99 ?
              (
                <div className='mx-5 mt-5 mb-4 relative'>
                  <p className='text-[#636B75] text-[13px] font-[600] mt-3'>Kilometerstand</p>
                  <span className='absolute right-5 top-9 font-[900]'>%</span>
                  <input id="message" rows="4" className="p-3 bg-[white] rounded-xl shadow-2xl mt-2 block w-full text-sm rounded-lg dark:placeholder-gray-400 " placeholder="20" />
                </div>
              )
              :
              ''

      }
    </div>
  )
}

export default CreateRent