import React from 'react'

const MenuItem = ({ image, text, icon }) => {
    const style = {
        zahlungen: 'flex items-center justify-between bg-white px-2 py-5 rounded-xl shadow-lg mt-2',
        einstellungen: 'flex items-center justify-between bg-white px-2 py-4 rounded-xl shadow-lg mt-2',
        fonts: 'text-black font-[600] text-[14px]'
    };
    return (
        <div className={style.zahlungen}>
            <div className='flex items-center px-2'>
                {
                    image && <img className='mr-2 ' src={image} />
                }
                <p className={style.fonts}>{text}</p>
            </div>
            <p className='mr-3'>{icon}</p>
        </div>
    )
}

export default MenuItem