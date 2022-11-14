import React from 'react';
import { useState } from 'react';
import LandlordRole from './RentalRoles/LandlordRole';
import RentalRoles from './RentalRoles/RentarRole';
import { landLordNav, rentarNav } from '../../fakeDB/elements';

const Rentals = () => {
    const [active, setActive] = useState(1)
    const landlord = false;
    const renter = true;
    const clickHandler = (index) => {
        setActive((prev) => {
            return prev === index ? null : index;
        });
    };

    const style = {
        nav: 'font-[700] text-[11.346px] bg-white py-2 px-2 text-[#7D7AFF] rounded-lg ',
        nav_active: 'font-[700] text-[11.346px] text-[gray] py-2 px-4 '
    }
    return (
        <div style={{ overflow: 'hidden', height: '100vh' }} className="lg:px-64 md:px-20 px-8 ">
            {
                landlord &&
                <div className='flex justify-center'>
                    <div className='bg-slate-200 flex justify-around mt-8 shadow-sm absolute mx-auto rounded-lg p-1'>
                        {landLordNav.map((element) => <p key={element.id} style={{ cursor: 'pointer' }} onClick={() => clickHandler(element.id)} className={active === element.id ? style.nav : style.nav_active}>{element.name}</p>)}
                    </div>
                </div>
            }
            {
                renter &&
                <div className='flex justify-center'>
                    <div className='bg-slate-200 flex justify-around mt-8 shadow-sm absolute mx-auto rounded-lg p-1'>
                        {rentarNav.map((element) => <p key={element.id} style={{ cursor: 'pointer' }} onClick={() => clickHandler(element.id)} className={active === element.id ? style.nav : style.nav_active}>{element.name}</p>)}
                    </div>
                </div>
            }
            {
                landlord && (<LandlordRole active={active} />)
            }
            {
                renter && (<RentalRoles />)
            }
        </div>
    )
}

export default Rentals