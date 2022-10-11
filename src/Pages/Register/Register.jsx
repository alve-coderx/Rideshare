import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai'

const Register = () => {
  const [toggle, setToggle] = useState(2);
  const [show, setShow] = useState();
  const clickCheckbox = (index) => {
    setShow((prev) => {
      return prev === index ? null : index;
    });

  };
  const clickHandler = (index) => {
    setToggle((prev) => {
      return prev === index ? null : index;
    });

  };
  const refs = [
    { name: "Gewerblich", id: 1 },
    { name: "Privat", id: 2 }
  ]
  const checkbox = [
    { name: "Newsletter", details: 'Datenschutz blab bla bla', id: 1 },
    { name: "Datenschutz", details: 'Datenschutz blab bla bla', id: 2 }
  ]
  return (
    <div className='text-center mx-8'>
      <div className='mt-16'>
        <p className="text-[28px] font-[600]">Registriere dich!</p>
        <div className='mt-4'>
          {
            refs.map((ref) => (
              <button onClick={() => clickHandler(ref.id)} className={toggle === ref.id ? 'bg-[#1E2024] text-[11px] text-white font-[600] py-2 px-4  rounded shadow' : 'bg-[#EFF3F8] border border-white text-[11px] font-[600]  text-[#636B75] font-semibold py-2 px-4 rounded '}>
                {ref.name}
              </button>
            ))
          }
        </div>
      </div>
      <div className='mt-8'>
        <div className='flex justify-between'>
          <input type="text" id="first_name" className="w-[133px] mt-3 bg-white text-black text-sm rounded-lg block w-full p-2.5 border-0" placeholder="Nachname" required />
          <input type="text" id="first_name" className="w-[133px] mt-3 bg-white text-black text-sm rounded-lg block w-full p-2.5 border-0" placeholder="Vorname" required />
        </div>
        <div className='relative'>
          <AiOutlineMail className='absolute top-3 left-4 text-[#636B75]' />
          <input type="text" id="first_name" className="mt-3 bg-white text-black text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 pl-10 border-0" placeholder="E-Mail" required />
        </div>
        <input type="password" id="first_name" className="mt-3 bg-white text-black text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 border-0" placeholder="Passwort" required />
        <input type="password" id="first_name" className="mt-3 bg-white text-black text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 border-0" placeholder="Passwort wiederholen" required />
        <div className='flex justify-around mt-5'>
          {
            checkbox.map((item) => (
              <div className={show === item.id ? 'w-[150px] border-2 border-[#7D7AFF] text-left bg-white rounded-lg p-3' : 'w-[150px]  text-left bg-white rounded-lg p-3'}>
                <span className='font-[600] text-[#0E0F11] text-[14px]'>{item.name}</span>
                <p className='font-[400] text-[#636B75] text-[14px]'>{item.details}</p>
                <div className="flex items-center mt-4">
                  <input onClick={() => clickCheckbox(item.id)} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 rounded " />
                  <label for="default-checkbox" className="ml-2 text-[14px] font-[400] text-[#636B75]">Checkbox</label>
                </div>
              </div>
            ))
          }
        </div>
        <Link to='/startsite/search'>
          <button className="mt-10 bg-[#7D7AFF] hover:bg-blue-700 text-white font-[500] py-3 px-4 rounded-lg text-[14px] w-full">
            Jetzt registrieren
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Register