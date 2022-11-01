import React from 'react'

const MenuItem = ({ image, text, icon }) => {
    const style = {
        zahlungen: 'flex items-center justify-between bg-white px-2 py-5 rounded-xl shadow-lg mt-2',
        einstellungen: 'flex items-center justify-between bg-white px-2 py-4 rounded-xl shadow-lg mt-2',
        fonts: 'text-black text-[12px]'
    };
    return (
        <div className={style.zahlungen}>
            <div className='flex items-center'>
                {
                    image && <img className='mr-2 ' src={image} />
                }
                <p className={style.fonts}>{text}</p>
            </div>
            {icon}
        </div>
    )
}

export default MenuItem