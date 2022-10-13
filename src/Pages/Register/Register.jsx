import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai'
import useSupplier from '../../Hook/useSupplier';
import {refs,checkbox} from '../../fakeDB/elements';

const style = {
  input : 'mt-3 bg-white text-black text-sm rounded-lg block w-full p-2.5 border-0'
}

const Register = () => {
  const [loginData, setLogindata] = useState({});
  const [toggle, setToggle] = useState(2);
  const [show, setShow] = useState();
  const { registerUser } = useSupplier();

  const handleOnChage = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLogindata(newLoginData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      alert("Password Not Matched")
      return;
    }
    registerUser(loginData.email, loginData.password)
  }
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
  
  return (
    <div className='text-center mx-8'>
      <div className='mt-16'>
        <p className="text-[28px] font-[600]">Registriere dich!</p>
        <div className='mt-4'>
          {
            refs.map((ref) => (
              <button key={ref.id} onClick={() => clickHandler(ref.id)} className={toggle === ref.id ? 'bg-[#1E2024] text-[11px] text-white font-[600] py-2 px-4  rounded shadow' : 'bg-[#EFF3F8] border border-white text-[11px] font-[600]  text-[#636B75] font-semibold py-2 px-4 rounded '}>
                {ref.name}
              </button>
            ))
          }
        </div>
      </div>
      <div className='mt-8'>
        <form onSubmit={handleSubmit}>
          <div className='flex justify-between'>
            <input type="text" className={`w-[133px] ${style.input}`} placeholder="Nachname" required />
            <input type="text" className={`w-[133px] ${style.input}`} placeholder="Vorname" required />
          </div>
          <div className='relative'>
            <AiOutlineMail className='absolute top-3 left-4 text-[#636B75]' />
            <input name='email' onChange={(e) => handleOnChage(e)} type="text" className={`pl-10 ${style.input}`} placeholder="E-Mail" required />
          </div>
          <input name='password' onChange={(e) => handleOnChage(e)} type="password" className={style.input} placeholder="Passwort" required />
          <input name='password2' onChange={(e) => handleOnChage(e)} type="password" className={style.input} placeholder="Passwort wiederholen" required />
          <div className='flex justify-around mt-5'>
            {
              checkbox.map((item) => (
                <div key={item.id} className={show === item.id ? 'w-[150px] border-2 border-[#7D7AFF] text-left bg-white rounded-lg p-3' : 'w-[150px]  text-left bg-white rounded-lg p-3'}>
                  <span className='font-[600] text-[#0E0F11] text-[14px]'>{item.name}</span>
                  <p className='font-[400] text-[#636B75] text-[14px]'>{item.details}</p>
                  <div className="flex items-center mt-4">
                    <input onClick={() => clickCheckbox(item.id)} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 rounded " />
                    <label className="ml-2 text-[14px] font-[400] text-[#636B75]">Checkbox</label>
                  </div>
                </div>
              ))
            }
          </div>
          <button type='submit' className="mt-10 bg-[#7D7AFF] hover:bg-blue-700 text-white font-[500] py-3 px-4 rounded-lg text-[14px] w-full">
            Jetzt registrieren
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register