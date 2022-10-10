import React from 'react'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='text-center mx-8'>
            <div className='mt-16'>
                <p className="text-4xl font-bold">Hello Again</p>
                <p className="text-sm mt-5 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, urna, a, fusce</p>
            </div>
            <div className='mt-8'>
                <input type="text" id="first_name" className="mt-3 bg-white text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dein Username" required />
                <input type="password" id="first_name" className="mt-3 bg-white text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dein Password" required />
                <p className='text-right text-[black] font-bold'>Passwort vergessen?</p>
                <Link to='/startsite/search'>
                    <button className="mt-10 bg-[#7D7AFF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full">
                        Login
                    </button>
                </Link>
            </div>
            <div className='mt-8'>
                <p className='text-center text-sm text-[black] font-bold'>Oder Login mit</p>
                <div className='flex justify-around'>
                    <button className="mt-10 bg-[white] font-bold py-3 px-8 rounded-lg">
                        <img src={facebook} />
                    </button>
                    <button className="mt-10 bg-[white] font-bold py-3 px-8 rounded-lg">
                        <img src={google} />

                    </button>
                    <button className="mt-10 bg-[white] font-bold py-3 px-8 rounded-lg">
                        <img src={apple} />

                    </button>
                </div>
                <p className='mt-10 text-center text-sm text-[black] font-bold'>Du hast keine Account? <span className='text-[#7D7AFF]'>Jetzt Registrieren</span></p>
            </div>
        </div>
    )
}

export default Login    