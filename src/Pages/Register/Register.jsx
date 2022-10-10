import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  const [toggle, setToggle] = useState();
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
        <p className="text-3xl font-bold">Registriere dich!</p>
        <div className='mt-4'>
          {
            refs.map((ref) => (
              <button onClick={() => clickHandler(ref.id)} className={toggle === ref.id ? 'bg-[black] text-white font-semibold py-2 px-4  rounded shadow' : 'bg-[transparent] text-gray-800 font-semibold py-2 px-4  rounded shadow '}>
                {ref.name}
              </button>
            ))
          }
        </div>
      </div>
      <div className='mt-8'>
        <div className='flex justify-between'>
          <input type="text" id="first_name" className="w-[133px] mt-3 bg-white text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nachname" required />
          <input type="text" id="first_name" className="w-[133px] mt-3 bg-white text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Vorname" required />
        </div>
        <input type="text" id="first_name" className="mt-3 bg-white text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-Mail" required />
        <input type="password" id="first_name" className="mt-3 bg-white text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Passwort" required />
        <input type="password" id="first_name" className="mt-3 bg-white text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Passwort wiederholen" required />
        <div className='flex justify-around mt-5'>
          {
            checkbox.map((item) => (
              <div className={show === item.id ? 'w-[150px] border-2 border-[#7D7AFF] text-left bg-white rounded-lg p-3' : 'w-[150px]  text-left bg-white rounded-lg p-3'}>
                <span className='font-bold text-[12px]'>{item.name}</span>
                <p className='font-bold text-[12px]'>{item.details}</p>
                <div className="flex items-center mt-4">
                  <input onClick={() => clickCheckbox(item.id)} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="default-checkbox" className="ml-2 text-[12px] font-bold text-black dark:text-black">Default checkbox</label>
                </div>
              </div>
            ))
          }
        </div>
        <Link to='/startsite/search'>
          <button className="mt-10 bg-[#7D7AFF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full">
            Jetzt registrieren
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Register