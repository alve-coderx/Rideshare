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
   

    return (
        <div style={{overflow : 'hidden', height : '100vh'}}>
            <div className='bg-slate-200 flex justify-between mx-10 mt-8 shadow-sm rounded-lg px-2 py-1'>
                {
                    landlord &&
                    landLordNav.map((element) => <p key={element.id} onClick={() => clickHandler(element.id)} className={active === element.id ? 'font-[600] text-[11.346px] bg-white py-1 px-2 text-[#7D7AFF] rounded-lg' : 'py-1 px-2 text-[11.346px] text-black'}>{element.name}</p>)
                }
                {
                    renter &&
                    rentarNav.map((element) => <p key={element.id} onClick={() => clickHandler(element.id)} className={active === element.id ? 'font-[600] text-[11.346px] bg-white py-1 px-2 text-[#7D7AFF] rounded-lg' : 'py-1 px-2 text-[11.346px] text-black'}>{element.name}</p>)
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