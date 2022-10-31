import React from 'react'

const RentBanner = ({image}) => {
    return (
        <div>
            <>
                <img className='w-full my-5' src={image} />
                <p className='text-white font-[400] text-[13px]'>Mache einen <span className='text-[#7D7AFF]'>Rundgang</span> um das Auto</p>
            </>
        </div>
    )
}

export default RentBanner