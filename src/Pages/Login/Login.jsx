import React from 'react';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';
import apple from '../../assets/apple.png';
import useAuth from '../../Hook/useAuth';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const style = {
    authIcons: 'mt-10 shadow-lg bg-[white] font-bold py-3 px-8 rounded-xl',
    input: 'mt-10 bg-white text-black text-sm rounded-xl   block w-full py-5 px-4 border-0 shadow-sm'
}

const Login = () => {
    const [loginData, setLogindata] = useState({});
    const { signInWithGoogle, signInWithFb, loginUser } = useAuth();

    const handleOnChage = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLogindata(newLoginData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password)
    };

    return (
        <div className='text-center w-full px-8 md:px-64 lg:px-96'>
            <div className='mt-16 text-center'>
                <p className="text-[28px] font-[600]">Hello Again</p>
                <p className="text-[15px] text-[#636B75] mt-2 font-[400] ">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Amet, urna, a, fusce</p>
            </div>
            <div className='mt-8'>
                <form onSubmit={handleSubmit}>
                    <input name='email' onChange={(e) => handleOnChage(e)} type="text" className={style.input} placeholder="Dein Username" required />
                    <input name='password' onChange={(e) => handleOnChage(e)} type="password" className={style.input} placeholder="Dein Password" required />
                    <Link to={'/passwordreset'}>
                        <p className='text-right text-[13px] text-[#1E2024] font-[600] mt-3'>Passwort vergessen?</p>
                    </Link>
                    <button type='submit' className="mt-10 text-[14px] bg-[#7D7AFF] text-white font-[500] px-4 py-5 rounded-lg w-full">
                        Login
                    </button>
                </form>
            </div>
            <div className='mt-8'>
                <p className='text-center text-[12px] text-[#636B75] font-[400]'>Oder Login mit</p>
                <div className='flex justify-around'>
                    <button onClick={() => signInWithFb()} className={style.authIcons}>
                        <img src={facebook} />
                    </button>
                    <button onClick={() => signInWithGoogle()} className={style.authIcons}>
                        <img src={google} />
                    </button>
                    <button className={style.authIcons}>
                        <img src={apple} />
                    </button>
                </div>
                <Link to='/register'>
                    <p className='mt-10 text-center text-[12px] text-[black] '>Du hast keine Account? <span className='text-[#7D7AFF] font-[700]'>Jetzt Registrieren</span></p>
                </Link>
            </div>
        </div>
    )
}

export default Login    