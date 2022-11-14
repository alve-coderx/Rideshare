import React from 'react';
import { useState } from 'react';
import { AiOutlineInfoCircle, AiOutlineRight, AiOutlineClose } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import map from '../../assets/map2.png';
import map2 from '../../assets/map.png';
import { models, kilometers, fuel, transmission } from '../../fakeDB/cars';
import { texts } from '../../fakeDB/elements';
import { Modal } from '../../Components';
import Counter from '../../Components/Counter';
import { Link } from 'react-router-dom';
import { MdAddPhotoAlternate } from 'react-icons/md';

const CreateCar = () => {
  const [prograss, setPrograss] = useState(16);
  const [active, setActive] = useState(1);
  const [value, setValue] = React.useState('fruit');
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState('');
  const [selectedFile, setSelectedFile] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const clickHandler = (index) => {
    setActive((prev) => {
      return prev === index ? null : index;
    });

  };


  const style = {
    wrapper: 'flex justify-between bg-white rounded-lg shadow-xl p-3 relative w-full',
    wrapper_secondary: 'mx-auto flex items-center text-left  bg-[#FFFBE6] rounded-lg shadow-xl py-3 mt-10 px-2 ',
    primary: 'text-[#838D95] w-96 text-[10px] font-[600] lg:ml-5 md:ml-10 ml-1',
    secondary: 'flex items-center text-[#636B75] text-[13px] font-[600]',
    heading: 'text-[#838D95] text-[12px] font-[400]',
    semiText: 'text-[24px] font-[600] ',
    text_bold: 'text-black text-[30px] lg:ml-5 md:ml-10 ml-1',
    btn: 'flex items-center justify-center mt-10 bg-[#7D7AFF] text-white py-4 px-4 rounded-lg w-full',
    input: 'mt-3 bg-white text-black text-sm rounded-lg block w-full p-2.5 border-0'

  }
  const Dropdown = ({ value, options, onChange }) => {
    return (
      <div className='absolute right-1'>
        <select className='flex items-center text-[#636B75] text-[13px] font-[600] border-0 px-8' value={value.value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.id} value={option}>{option.value}</option>
          ))}
        </select>
      </div>
    );
  };
  const onFileChange = event => {

    // Update the state
    setSelectedFile(event.target.files[0])
  };
  const onFileUpload = () => {

    // Create an object of formData
    // Update the formData object
    const formData = {
      selectedFile,
      value
    };



    // Details of the uploaded file
    console.log(formData);

    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
  };
  return (
    <div>
      <div className='bg-white lg:px-[26rem] px-5 py-7 '>
        <div className={prograss === 16.66 ? `flex justify-end` : 'flex justify-between'}>
          <p onClick={() => setPrograss((prevState) => prevState - 16)} className={prograss === 16 ? 'hidden ' : 'text-[#7D7AFF] font-[600]'} style={{ cursor: "pointer" }}>zurück</p>
          <Link to='/startsite/mycars'>
            <div className='bg-black text-white p-2 rounded-lg'>
              <AiOutlineClose />
            </div>
          </Link>
        </div>  
        <div className='mt-2 mr-10'>
          <div className="w-[100%] bg-gray-200 h-1">
            <div className="bg-[#7D7AFF] h-1" style={{ maxWidth: '100%', width: `${prograss}%` }}></div>
          </div>
        </div>
      </div>
      <div className='text-center mx-5 mt-8'>
        {
          prograss === 16 ? (
            <div className='lg:mx-96 mx-5'>
              <p className='text-[24px] font-[600]'>Modell deines Fahrzeugs</p>
              <div className='grid lg:grid-cols-1 gap-2 grid-cols-1 justify-items-center'>
                <div className={`mt-5 ${style.wrapper} lg:py-6`}>
                  <p className={style.heading}>Marke</p>
                  <Dropdown
                    options={models}
                    value={value}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className={`mt-5 ${style.wrapper} lg:py-6`}>
                  <p className={style.heading}>Marke</p>
                  <Dropdown
                    options={models}
                    value={value}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className={`mt-5 ${style.wrapper} lg:py-6`}>
                  <p className={style.heading}>Kilometerstand</p>
                  <Dropdown
                    options={kilometers}
                    value={value}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className={`mt-5 ${style.wrapper} lg:py-6`}>
                  <p className={style.heading}>Baujahr</p>
                  <Dropdown
                    options={kilometers}
                    value={value}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className={style.wrapper_secondary}>
                <p > <AiOutlineInfoCircle className={style.text_bold} /></p>
                <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dictum tortor odio at. Feugiat sapien orci imperdiet nisi, venenatis, tincidunt. Dui semper amet leo, nulla. Bibendum purus,</p>
              </div>
            </div>
          )
            :
            prograss === 32 ? (
              <div className='lg:mx-96 mx-5'>
                <p className={style.semiText}>Details hinzufügen</p>
                <div className={`mt-5 ${style.wrapper} py-6  right-0 left-0 mx-auto`}>
                  <p className={style.heading}>Kraftstoff</p>
                  <Dropdown
                    options={models}
                    value={value}
                    onChange={handleChange}
                  />
                </div>
                <div className={`mt-5 ${style.wrapper} py-6  right-0 left-0 mx-auto`}>
                  <p className={style.heading}>Getriebe</p>
                  <Dropdown
                    options={models}
                    value={value}
                    onChange={handleChange}
                  />
                </div>
                <div className=''>
                  <Counter name='Anzahl der Türen' />
                  <p className='border-b-[3px] border-[#838D95] text-white w-full'>.</p>
                  <Counter name='Anzahl der Sitze' />
                  <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-3 gap-4 mt-4 justify-items-center'>
                    {
                      texts.map((text) => <p key={text.id} onClick={() => clickHandler(text.id)} className={active === text.id ? 'text-[white] p-2 rounded-xl text-[12px] bg-[#7D7AFF] font-[400]' : 'text-[black] border border-black p-2 rounded-xl text-[12px] bg-[transparent] font-[400]'}>{text.name}</p>)
                    }
                  </div>
                </div>

              </div>
            )
              :
              prograss === 48 ? (
                <div className='lg:mx-96 mx-5'>
                  <p className={style.semiText}>Zulassung</p>
                  <div className='grid lg:grid-cols-1 gap-2 grid-cols-1 justify-items-center'>
                    <div className={`mt-5 ${style.wrapper} lg:py-6`}>
                      <p className={style.heading}>Erstzulassung</p>
                      <Dropdown
                        options={fuel}
                        value={value}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={`mt-5 ${style.wrapper} lg:py-6`}>
                      <p className={style.heading}>Land der Zulassung</p>
                      <Dropdown
                        options={transmission}
                        value={value}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={`mt-5 ${style.wrapper} lg:py-6`}>
                      <p className={style.heading}>KFZ-Kennzeichen</p>
                      <Dropdown
                        options={transmission}
                        value={value}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={style.wrapper_secondary}>
                    <p > <AiOutlineInfoCircle className={style.text_bold} /></p>
                    <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dictum tortor odio at. Feugiat sapien orci imperdiet nisi, venenatis, tincidunt. Dui semper amet leo, nulla. Bibendum purus,</p>
                  </div>
                </div>
              )
                :
                prograss === 64 ? (
                  <div className='lg:mx-96 mx-5'>
                    <p className={style.semiText}>Preisangabe</p>
                    <Counter name='Anzahl der Türen' />
                    <div className={`mt-5 ${style.wrapper} lg:py-6`}>
                      <p className={style.heading}>Preis genauer definieren</p>
                      <Dropdown
                        options={transmission}
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
                  prograss === 80 ? (
                    <div className='lg:mx-96 mx-5' >
                      <p className={style.semiText}>Treffpunkt einstellen</p>
                      <div className='flex justify-center'>
                        <img className='rounded-3xl my-3 h-52 lg:block md:block hidden' src={map} />
                        <img className='rounded-3xl my-3 h-32 lg:hidden md:hidden block' src={map2} />
                      </div>
                      <div className='bg-white rounded-lg shadow-xl p-3 mt-8 lg:py-6 mx-auto'>
                        <p className='flex justify-start items-center text-[#838D95] text-[12px] font-[400]'>Getriebe</p>
                      </div>
                      <div className={style.wrapper_secondary}>
                        <p > <AiOutlineInfoCircle className={style.text_bold} /></p>
                        <p className={style.primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dictum tortor odio at. Feugiat sapien orci imperdiet nisi, venenatis, tincidunt. Dui semper amet leo, nulla. Bibendum purus,</p>
                      </div>
                    </div>

                  )
                    :
                    prograss === 96 ? (
                      <div className='lg:mx-96 mx-5'>
                        <p className={style.semiText}>Lade Bilder von deinem Auto hoch</p>
                        <div className='text-center bg-[#E6E6FF] flex items-center justify-center rounded-lg py-10 mt-5 lg:py-6  mx-auto'>
                          <div className="flex w-full items-center justify-center bg-grey-lighter">
                            <label className="w-64 flex flex-col items-center px-4 py-6 text-blue rounded-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                              <span className="text-base leading-normal">
                                <p className='text-[#7D7AFF] text-[40px] font-[400]'><MdAddPhotoAlternate /></p>
                              </span>
                              <input type='file' onChange={onFileChange} className="hidden" />
                            </label>
                          </div>
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
      <div className='mx-auto right-0 left-0 pb-2 lg:pb-0 lg:bottom-10 lg:absolute w-[92%] lg:w-[32%]'>
        <button onClick={() => setPrograss((prevState) => prevState + 16)} className={prograss === 96 ? "hidden" : style.btn}>
          Nächster Schritt
        </button>
        <button onClick={() => setOpen(true)} className={prograss === 96 ? style.btn : "hidden"}>
          Nächster Schritt
        </button>
        <Modal open={open} setOpen={setOpen} />
      </div>
    </div>
  )
}

export default CreateCar