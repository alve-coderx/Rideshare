import React from 'react'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='text-center mx-8'>
            <div className='mt-16'>
                <p className="text-[28px] font-[600]">Hello Again</p>
                <p className="text-[14px] text-[#636B75] mt-2 font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, urna, a, fusce</p>
            </div>
            <div className='mt-8'>
                <input type="text" id="first_name" className="mt-3 bg-white text-black text-sm rounded-lg   block w-full p-2.5 border-0 shadow-sm " placeholder="Dein Username" required />
                <input type="password" id="first_name" className="mt-3 bg-white text-black text-sm rounded-lg   block w-full p-2.5 border-0 shadow-sm " placeholder="Dein Password" required />
                <p className='text-right text-[13px] text-[#1E2024] font-[600]'>Passwort vergessen?</p>
                <Link to='/startsite/search'>
                    <button className="mt-10 text-[14px] bg-[#7D7AFF] text-white font-[500] py-2 px-4 rounded-lg w-full">
                        Login
                    </button>
                </Link>
            </div>
            <div className='mt-8'>
                <p className='text-center text-[12px] text-[#636B75] font-[400]'>Oder Login mit</p>
                <div className='flex justify-around'>
                    <button className="mt-10 shadow-lg bg-[white] font-bold py-3 px-8 rounded-xl">
                        <img src={facebook} />
                    </button>
                    <button className="mt-10 shadow-lg bg-[white] font-bold py-3 px-8 rounded-xl">
                        <img src={google} />

                    </button>
                    <button className="mt-10 shadow-lg bg-[white] font-bold py-3 px-8 rounded-xl">
                        <img src={apple} />

                    </button>
                </div>
                <p className='mt-10 text-center text-[12px] text-[black] font-[700]'>Du hast keine Account? <span className='text-[#7D7AFF]'>Jetzt Registrieren</span></p>
            </div>
        </div>
    )
}

export default Login    