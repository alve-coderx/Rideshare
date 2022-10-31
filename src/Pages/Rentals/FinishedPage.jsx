import React from 'react';
import { AiOutlineArrowRight, AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import avater from '../../assets/avater.png';
import { BaseCard, MenuItem } from '../../Components';
const FinishedPage = () => {
  return (
    <div className='mx-6 lg:mx-36'>
      <div className='mt-5'>

        <p className='flex justify-between text-[14px] font-[600]'><span className='text-[#7D7AFF]'>fertig</span><span>Anmietung #2395753</span><span className='text-[#7D7AFF]'>hilfe</span></p>
        <li className='text-[#636B75] text-[12px] font-[400] mt-5 mx-1 w-92'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, tincidunt quisque mattis risus.</li>
        <li className='text-[#636B75] text-[12px] font-[400] mt-5 mx-1 w-92'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, tincidunt quisque mattis risus.</li>
        <Link to='/rental/documents'>
          <button className="mt-10 bg-[#1E2024] hover:bg-blue-700 text-white py-4 px-4 rounded-lg w-full">
            Beginne die Anmietung
          </button>
        </Link>
      </div>
      <div className='mt-5'>
        <p className='text-[14px] font-[600]'>Oft genutzte Funktionen</p>
        <MenuItem text="Verlängere die Anmietung oder passe sie an" icon={<AiOutlineRight />} />
        <MenuItem text="Die Anmietung stornieren" icon={<AiOutlineRight />} />
        <MenuItem text="Auto wechseln" icon={<AiOutlineRight />} />

      </div>
      <div className='mt-5'>
        <p className='text-[14px] font-[600]'>Oft genutzte Funktionen</p>
        <BaseCard image={avater} title='Thomas' subTitle='Nachricht' lfTag='18 März 18:40' subLink='Alle ansehen und antworten' />
      </div>
      <div className='mt-5 mb-3'>
        <p className='text-[14px] font-[600]'>Mieter</p>
        <BaseCard image={avater} title='Thomas' bg="#7D7AFF" color="white" arrow={<AiOutlineRight />} />
      </div>
    </div>
  )
}

export default FinishedPage