import React from 'react';
import { useState } from 'react';
import LandlordRole from './RentalRoles/LandlordRole';
import RentalRoles from './RentalRoles/RentarRole';
import {landLordNav,rentarNav} from '../../fakeDB/elements';

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
        nav : 'font-[600] text-[11.346px] bg-white py-1  text-[#7D7AFF] rounded-lg ',
        nav_active : 'py-1 text-[11.346px] text-black '
    }
    return (
        <div style={{overflow : 'hidden', height : '100vh'}} className="lg:px-44 md:px-20 px-10">
            <div className='bg-slate-200 flex justify-between mt-8 shadow-sm rounded-lg px-2 py-1 lg:mx-52 md:mx-32'>
                {
                    landlord &&
                    landLordNav.map((element) => <p key={element.id} style={{cursor : 'pointer'}}  onClick={() => clickHandler(element.id)} className={active === element.id ? style.nav : style.nav_active}>{element.name}</p>)
                }
                {
                    renter &&
                    rentarNav.map((element) => <p key={element.id} style={{cursor : 'pointer'}} onClick={() => clickHandler(element.id)} className={active === element.id ? style.nav : style.nav_active}>{element.name}</p>)
                }
               
            </div>
            {
                landlord && (<LandlordRole active={active}/>)
            }
            {
                renter && (<RentalRoles/>)
            }
        </div>
    )
}

export default Rentals