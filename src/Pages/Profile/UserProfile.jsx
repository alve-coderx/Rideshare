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
        <div style={{ overflow: 'hidden', height: '100vh' }}>
            <div>
                <Link to='/startsite/search'>
                    <p className='z-10 absolute top-10 left-5 lg:left-20 text-[#7D7AFF]'>zurück</p>
                </Link>
                <span className='z-10 absolute top-10 right-5 lg:right-20 bg-[#FFC53D] text-white text-sm flex items-center rounded-lg px-3 py-1'><AiFillStar /> 5.0</span>
            </div>
            <div className='flex flex-col items-center justify-center mt-10 '>
                <img className='mt-3 rounded-[100px]' src={user?.photoURL || avater} />
                <p className='mt-3 font-black text-sm'>{user.displayName || 'Vorname Nachname'}</p>
                <button className="mt-3 bg-[#7D7AFF] w-32 hover:bg-blue-700 text-white text-[11px] font-bold py-2 px-4 rounded-lg w-full">
                    Profil bearbeiten
                </button>
            </div>
            <div className='pb-16 h-4/6 mx-5 lg:mx-32'>
                <p className='mt-3 font-black text-sm'>Zahlungen</p>
                <div className='grid lg:grid-cols-2 grid-cols-1  gap-4' >
                    {
                        zahlungen.map((option) => (
                            <MenuItem key={option.id} image={option.img} text={option.name} icon={option.icon} />
                        ))
                    }
                </div>
                <div>
                    <p className='mt-3 font-black text-sm'>Einstellungen</p>
                    <div className='grid lg:grid-cols-2 grid-cols-1  gap-4'>
                        <MenuItem image={op4} text='Sprache' icon={<AiOutlineRight />} />
                        <MenuItem text='Impressum' icon={<AiOutlineRight />} />
                        <MenuItem text='Rechtliches' icon={<AiOutlineRight />} />
                    </div>
                </div>
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
    )
}

export default UserProfile