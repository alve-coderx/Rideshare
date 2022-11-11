import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { refs, checkbox } from '../../fakeDB/elements';
import useAuth from '../../Hook/useAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const style = {
  input: 'mt-8 bg-white text-black text-sm rounded-lg block w-full py-4 border-0 m-1',
  boldText: 'text-sm '
}

const Register = () => {
  const [loginData, setLogindata] = useState({});
  const [toggle, setToggle] = useState(2);
  const [show, setShow] = useState(1);
  const { registerUser, confirm } = useAuth();
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
    registerUser(loginData.email, loginData.password, loginData.firstname, loginData.lastname, loginData.company);
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
    <div className='text-center w-full px-8 md:px-64 lg:px-96'>
      <div className='mt-10'>
        <ToastContainer autoClose={1000}/>

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
      <div className='mt-3'>
        <form onSubmit={handleSubmit}>
          <div className='flex justify-around'>
            <input name='lastname' onChange={(e) => handleOnChage(e)} type="text" className={`${style.input}`} placeholder="Nachname" required />
            <input name='firstname' onChange={(e) => handleOnChage(e)} type="text" className={`${style.input}`} placeholder="Vorname" required />
          </div>
          {
            toggle === 1 && <input name='company' onChange={(e) => handleOnChage(e)} type="text" className={`${style.input}`} placeholder="firmenname" required />
          }
          <div className='relative'>
            <AiOutlineMail className='absolute top-4 left-4 text-[#636B75]' />
            <input name='email' onChange={(e) => handleOnChage(e)} type="text" className={`pl-10 ${style.input}`} placeholder="E-Mail" required />
          </div>
          <input name='password' onChange={(e) => handleOnChage(e)} type="password" className={style.input} placeholder="Passwort" required />
          <input name='password2' onChange={(e) => handleOnChage(e)} type="password" className={style.input} placeholder="Passwort wiederholen" required />
          <div className='flex justify-between mt-5'>
            {
              checkbox.map((item) => (
                <div key={item.id} className={show === item.id ? 'border-2 border-[#7D7AFF] text-left bg-white rounded-lg p-3 m-1 w-full' : 'w-full text-left bg-white rounded-lg p-3 m-1'}>
                  <span className='font-[600] text-[#0E0F11] text-[14px]'>{item.name}</span>
                  <p className='font-[400] text-[#636B75] text-[14px] py-4'>{item.details}</p>
                  <div className="flex items-center mt-4">
                    <input onClick={() => clickCheckbox(item.id)} type="checkbox" defaultChecked={show === item.id} className="w-4 h-4 text-blue-600 rounded " />
                    <label className="ml-2 text-[14px] font-[400] text-[#636B75]">Checkbox</label>
                  </div>
                </div>
              ))
            }
          </div>
          <button type='submit' className="my-10 bg-[#7D7AFF] hover:bg-blue-700 text-white font-[500] px-4 py-5 rounded-lg text-[14px] w-full">
            Jetzt registrieren
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register