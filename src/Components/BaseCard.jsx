import React from 'react'
import { AiFillStar, AiOutlineArrowRight, AiOutlineEdit } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { Link } from 'react-router-dom'
import DatePicker from './DatePicker'

const BaseCard = ({edit,arrow,color,bg, link, image, primaryTag, secondaryTag, title, subTitle, price, hours, iconTag, tagBg, datePicker, subLink, rentPrice, lfTag }) => {
    return (
        <div className={`w-full flex items-top bg-[${(bg)}] p-3 rounded-xl relative shadow-xl mt-2 `}>
            <Link to={link}>
                <div className='flex items-center'>
                    {
                        lfTag && <span className='absolute top-2 right-2 font-[400] text-[#636B75] text-[12px]'>{lfTag}</span>
                    }
                    <div className='relative'>
                        {
                            primaryTag && <span className='absolute top-1 left-1 bg-[#7D7AFF] text-white text-[8px] flex items-center rounded-lg p-1'><GoLocation /> {primaryTag}</span>
                        }

                        <img src={image} />
                        {
                            iconTag && <p style={{backgroundColor : tagBg}} className={`absolute top-1 left-1 p-2 rounded-xl font-[900] text-[20px]`}>{iconTag}</p>
                        }
                    </div>
                    <div className='ml-4'>
                        <p className={`mt-1 text-[${(color)}] flex items-center text-[16] font-[600]`}>{title} {arrow && <span className='ml-32'>{arrow}</span>}</p>
                        <p className='mt-1 text-[#838D95] text-[12px]'>{subTitle}</p>
                        <p className='mt-1 font-black text-sm'>{price}<span className='text-[#838D95] text-[10px] ml-2'>{hours}</span>  </p>
                        {datePicker && <DatePicker color='#E6E5FF' />}
                        {edit && <p className='flex mt-1 text-[#7D7AFF] text-[9px] border border-[#7D7AFF] rounded-lg p-2'>informationen bearbeiten <AiOutlineEdit className='ml-3' /></p>}
                        <p className='mt-1 text-[#7D7AFF] text-[12px]'>{rentPrice}</p>

                    </div>
                </div>
            </Link>
            {
                secondaryTag && <span className='absolute bottom-3 right-3 bg-[#FFC53D] text-white text-sm flex items-center rounded-lg p-1'><AiFillStar /> {secondaryTag}</span>
            }
            {
                subLink && <span className='absolute bottom-2 right-3 font-[500] text-[12px] flex items-center rounded-lg p-1'>{subLink} <AiOutlineArrowRight /> </span>
            }

        </div>
    )
}

export default BaseCard