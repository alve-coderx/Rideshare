import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSupplier from '../../Hook/useSupplier';

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const {handleForgetPass} = useSupplier();
    const style = {
        authIcons: 'mt-10 shadow-lg bg-[white] font-bold py-3 px-8 rounded-xl',
        input: 'mt-3 bg-white text-black text-sm rounded-lg   block w-full p-2.5 border-0 shadow-sm',
        btn : 'mt-5 text-[14px] bg-[#7D7AFF] text-white font-[500] py-2 px-4 rounded-lg w-full',
        primary : 'ext-[10px] text-[#636B75] mt-2 font-[400]'
    }
    
    return (
        <div className='mx-8'>
            <div className='text-center mt-20'>
                <p className="text-[28px] font-[600]">Passwort vergessen?   </p>
                <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, urna, a, fusce</p>
                <input name='email' onChange={(e) => setEmail(e.target.value)} type="text" className={style.input} placeholder="Deine E-Mail adresse" required />
                <button onClick={() => handleForgetPass(email)} type='submit' className={style.btn}>
                    Wiederherstellungslink senden
                </button>
                <Link to='/login'>
                    <p className={style.primary}>Zurück zum Login</p>
                </Link>
            </div>
        </div>
    )
}

export default PasswordReset;