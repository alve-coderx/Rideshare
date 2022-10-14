import React from 'react';
import { useState } from 'react';
import { AiOutlineInfoCircle, AiOutlineMinus, AiOutlinePlus, AiOutlineRight } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go';
import { BiImages } from 'react-icons/bi';
import filter_alt from '../../assets/filter_alt.png';
import map from '../../assets/map.png';
import { models } from '../../fakeDB/cars';
import { texts } from '../../fakeDB/elements';
import { Modal } from '../../Components';

const CreateCar = () => {
  const [prograss, setPrograss] = useState(11.11);
  const [active, setActive] = useState(false);
  const [value, setValue] = React.useState('fruit');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const clickHandler = (index) => {
    setActive((prev) => {
      return prev === index ? null : index;
    });

  };


  const style = {
    wrapper: 'flex justify-between bg-white rounded-lg shadow-xl p-3 ',
    wrapper_secondary: 'flex items-center text-left justify-between bg-white rounded-lg shadow-xl py-3 mt-10 px-5',
    primary: 'text-[#838D95] w-60 text-[10px] font-[400]',
    secondary: 'flex items-center text-[#636B75] text-[13px] font-[600]',
    heading: 'text-[#838D95] text-[12px] font-[400]',
    semiText: 'text-[24px] font-[600]',
    text_bold: 'text-black text-[30px]',
    btn: 'flex items-center justify-center mt-10 bg-[#7D7AFF] text-white py-4 px-4 rounded-lg w-full'

  }
  const Dropdown = ({ value, options, onChange }) => {
    return (
      <div className='absolute right-9'>
        <select className='flex items-center text-[#636B75] text-[13px] font-[600] border-0 px-6' value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.value}</option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div>
      <div className='bg-white px-5 py-7'>
        <div className='flex justify-end'>
          <div className='bg-black p-2 rounded-lg'>
            <img src={filter_alt} />
          </div>
        </div>
        <div className='mt-3'>
          <div className="w-full bg-gray-200 h-1">
            <div className="bg-[#7D7AFF] h-1" style={{ maxWidth: '100%', width: `${prograss}%` }}></div>
          </div>
        </div>
      </div>
      <div className='text-center mx-5 mt-8'>
        {
          prograss === 11.11 ? (
            <div>
              <p className='text-[24px] font-[600]'>Modell deines Fahrzeugs</p>
              <div className={`mt-8 ${style.wrapper}`}>
                <p className={style.heading}>Marke</p>
                <Dropdown
                  options={models}
                  value={value}
                  onChange={handleChange}
                />
              </div>
              <div className={`mt-5 ${style.wrapper}`}>
                <p className={style.heading}>Marke</p>
                <Dropdown
                  options={models}
                  value={value}
                  onChange={handleChange}
                />
              </div>
              <div className={style.wrapper_secondary}>
                <p > <AiOutlineInfoCircle className={style.text_bold} /></p>
                <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dictum tortor odio at. Feugiat sapien orci imperdiet nisi, venenatis, tincidunt. Dui semper amet leo, nulla. Bibendum purus,</p>
              </div>
            </div>
          )
            :
            prograss === 22.22 ? (
              <div>
                <p className={style.semiText}>Gebe den Kilometerstand ein</p>
                <div className={`mt-8 ${style.wrapper}`}>
                  <p className={style.heading}>Kilometerstand</p>
                  <p className={style.secondary}>15-60.000km <AiOutlineRight className='ml-5 text-black text-[20px]' /></p>

                </div>
                <div className={style.wrapper_secondary}>
                  <p > <AiOutlineInfoCircle className={style.text_bold} /></p>
                  <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dictum tortor odio at. Feugiat sapien orci imperdiet nisi, venenatis, tincidunt. Dui semper amet leo, nulla. Bibendum purus,</p>
                </div>
              </div>
            )
              :
              prograss === 33.33 ? (
                <div>
                  <p className={style.semiText}>Details hinzufügen</p>
                  <div className={`mt-8 ${style.wrapper}`}>
                    <p className={style.heading}>Kraftstoff</p>
                    <p className={style.secondary}>Diesel <AiOutlineRight className='ml-5 text-black text-[20px]' /></p>

                  </div>
                  <div className='flex justify-between bg-white rounded-lg shadow-xl p-3 mt-5'>
                    <p className={style.heading}>Getriebe</p>
                    <p className={style.secondary}>Automatik <AiOutlineRight className='ml-5 text-black text-[20px]' /></p>

                  </div>
                  <div className={style.wrapper_secondary}>
                    <p > <AiOutlineInfoCircle className={style.text_bold} /></p>
                    <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dictum tortor odio at. Feugiat sapien orci imperdiet nisi, venenatis, tincidunt. Dui semper amet leo, nulla. Bibendum purus,</p>
                  </div>
                </div>
              )
                :
                prograss === 44.44 ? (
                  <div>
                    <p className={style.semiText}>Details hinzufügen</p>
                    <div className='flex justify-between p-3 mt-8 border-b border-[gray]'>
                      <p className={style.heading}>Anzahl der Türen</p>
                      <p className={style.secondary}><AiOutlineMinus className='mr-5 text-black text-[20px]' /> 4  <AiOutlinePlus className='ml-5 text-black text-[20px]' /></p>

                    </div>
                    <div className='flex justify-between p-3 mt-5'>
                      <p className={style.heading}>Anzahl der Sitze</p>
                      <p className={style.secondary}><AiOutlineMinus className='mr-5 text-black text-[20px]' /> 5 <AiOutlinePlus className='ml-5 text-black text-[20px]' /></p>

                    </div>
                    <div className={style.wrapper_secondary}>
                      <p > <AiOutlineInfoCircle className={style.text_bold} /></p>
                      <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dictum tortor odio at. Feugiat sapien orci imperdiet nisi, venenatis, tincidunt. Dui semper amet leo, nulla. Bibendum purus,</p>
                    </div>
                  </div>

                )
                  :
                  prograss === 55.55 ? (
                    <div>
                      <p className={style.semiText}>Weitere Merkmale</p>
                      <div className='flex flex-wrap p-3 mt-8 '>
                        {
                          texts.map((text) => <p key={text.id} onClick={() => clickHandler(text.id)} className={active === text.id ? 'text-[white] m-1 p-2 rounded-lg text-[12px] bg-[#7D7AFF] font-[400]' : 'text-[black] border border-black m-1 p-2 rounded-lg text-[12px] bg-[transparent] font-[400]'}>{text.name}</p>)
                        }
                      </div>

                      <div className={style.wrapper_secondary}>
                        <p > <AiOutlineInfoCircle className={style.text_bold} /></p>
                        <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dictum tortor odio at. Feugiat sapien orci imperdiet nisi, venenatis, tincidunt. Dui semper amet leo, nulla. Bibendum purus,</p>
                      </div>
                    </div>

                  )
                    :
                    prograss === 66.66 ? (
                      <div>
                        <p className={style.semiText}>Treffpunkt einstellen</p>
                        <div className='flex justify-center'>
                          <img className='rounded-3xl w-72 h-36 my-3' src={map} />
                        </div>
                        <div className='bg-white rounded-lg shadow-xl p-3 mt-8'>
                          <p className='flex justify-start items-center text-[#838D95] text-[12px] font-[400]'><GoLocation />Standord eingeben</p>
                        </div>
                        <div className={style.wrapper_secondary}>
                          <p > <AiOutlineInfoCircle className={style.text_bold} /></p>
                          <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dictum tortor odio at. Feugiat sapien orci imperdiet nisi, venenatis, tincidunt. Dui semper amet leo, nulla. Bibendum purus,</p>
                        </div>
                      </div>

                    )
                      :
                      prograss === 77.77 ? (
                        <div>
                          <p className={style.semiText}>Preisangabe</p>
                          <div className='flex justify-between p-3 mt-8 '>
                            <p className={style.heading}>Anzahl der Türen</p>
                            <p className={style.secondary}><AiOutlineMinus className='mr-5 text-black text-[20px]' /> 40 € <AiOutlinePlus className='ml-5 text-black text-[20px]' /></p>

                          </div>

                          <div className={style.wrapper_secondary}>
                            <p > <AiOutlineInfoCircle className={style.text_bold} /></p>
                            <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dictum tortor odio at. Feugiat sapien orci imperdiet nisi, venenatis, tincidunt. Dui semper amet leo, nulla. Bibendum purus,</p>
                          </div>
                        </div>

                      )
                        :
                        prograss === 88.88 ? (
                          <div>
                            <p className={style.semiText}>Gib deine Telefonnummer ein </p>
                            <div className='text-left bg-white rounded-lg shadow-xl p-3 mt-5'>
                              <p className={style.heading}>Telefonnummer eingeben</p>
                            </div>

                            <div className={style.wrapper_secondary}>
                              <p > <AiOutlineInfoCircle className={style.text_bold} /></p>
                              <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dictum tortor odio at. Feugiat sapien orci imperdiet nisi, venenatis, tincidunt. Dui semper amet leo, nulla. Bibendum purus,</p>
                            </div>
                          </div>

                        )
                          :
                          prograss === 99.99 ? (
                            <div>
                              <p className={style.semiText}>Lade Bilder von deinem Auto hoch</p>
                              <div className='text-center bg-[#E6E6FF] flex items-center justify-center rounded-lg shadow-xl px-5 py-10 mt-5'>
                                <p className='text-[#7D7AFF] text-center text-[32px] font-[400]'><BiImages /></p>
                              </div>

                              <div className={style.wrapper_secondary}>
                                <p > <AiOutlineInfoCircle className={style.text_bold} /></p>
                                <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dictum tortor odio at. Feugiat sapien orci imperdiet nisi, venenatis, tincidunt. Dui semper amet leo, nulla. Bibendum purus,</p>
                              </div>
                            </div>

                          )
                            :
                            ''
        }
      </div>
      <div className='mx-auto right-0 left-0 bottom-2 absolute w-[92%]'>
        <button onClick={() => setPrograss((prevState) => prevState + 11.11)} className={prograss === 99.99 ? "hidden" : style.btn}>
          Nächster Schritt
          <AiOutlineRight className='ml-5 text-[20px]' />
        </button>
        <button onClick={() => setOpen(true)} className={prograss === 99.99 ? style.btn : "hidden"}>
          Nächster Schritt
          <AiOutlineRight className='ml-5 text-[20px]' />
        </button>
        <Modal open={open} setOpen={setOpen} />
      </div>
    </div>
  )
}

export default CreateCar