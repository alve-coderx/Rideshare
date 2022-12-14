import React from 'react';
import { AiFillStar, AiOutlineRight } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import avater from '../../assets/avater.png';
import op1 from '../../assets/op1.png';
import op2 from '../../assets/op2.png';
import op3 from '../../assets/op3.png';
import op4 from '../../assets/op4.png';
import MenuItem from '../../Components/MenuItem';
import useAuth from '../../Hook/useAuth';

const UserProfile = () => {
    const { logout, user } = useAuth();
    const zahlungen = [
        { name: 'zurück', img: op1, icon: <AiOutlineRight />, id: 1 },
        { name: 'Zahlungsbelege', img: op2, icon: <AiOutlineRight />, id: 2 },
        { name: 'Zahlungsart angeben', img: op3, icon: <AiOutlineRight />, id: 3 },
    ];
    return (
        <div style={{ overflow: 'auto', height: '100vh' }}>
            <div className='my-5 mx-5 lg:mx-96' >
                <p className='flex justify-between text-[14px] font-[600] my-2'>
                    <Link to='/startsite/search'>
                        <span className='text-[#7D7AFF]'>zurück</span>
                    </Link>
                    <span className='bg-[#FFC53D] text-white text-sm flex items-center rounded-lg px-3 py-1'><AiFillStar /> 5.0</span>
                </p>
            </div>
            <div className='flex flex-col items-center justify-center mt-1 '>
                <img className='mt-3 rounded-[100px]' src={user?.photoURL || avater} />
                <p className='mt-3 font-black text-sm'>{user.displayName || 'Vorname Nachname'}</p>
                <button className="mt-3 bg-[#7D7AFF] w-32 hover:bg-blue-700 text-white text-[11px] font-bold py-2 px-4 rounded-lg w-full">
                    Profil bearbeiten
                </button>
            </div>
            <div className='pb-10 mx-5 lg:mx-96' >
                <p className='mt-3 font-black text-sm'>Zahlungen</p>
                <div className='grid grid-cols-1  gap-4' >
                    {
                        zahlungen.map((option) => (
                            <MenuItem key={option.id} image={option.img} text={option.name} icon={option.icon} />
                        ))
                    }
                </div>
                <div>
                    <p className='mt-3 font-black text-sm'>Einstellungen</p>
                    <div className='grid grid-cols-1  gap-4'>
                        <MenuItem image={op4} text='Sprache' icon={<AiOutlineRight />} />
                        <MenuItem text='Impressum' icon={<AiOutlineRight />} />
                        <MenuItem text='Rechtliches' icon={<AiOutlineRight />} />
                        {user.email && (
                            <div className=' '>
                                <p className='mt-8 font-black text-sm'>Logout</p>
                                {
                                    <button onClick={logout} className='w-full'>
                                        <MenuItem logout={logout} text='Logout' icon={<BiLogOut />} />
                                    </button>
                                }
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserProfile