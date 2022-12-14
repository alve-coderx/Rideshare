import React from 'react';
import avater from '../../../assets/avater.png';
import { AiOutlineArrowUp, AiOutlineCheckCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsClock } from 'react-icons/bs';
import './inbox.css';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { MdDateRange } from 'react-icons/md';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { Link } from 'react-router-dom';
import car from '../../../assets/tesla.png';
import car2 from '../../../assets/tesla2.png';
import { DatePicker } from '../../../Components';

const Inbox = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const [orderConfirm, setOrderConfirm] = useState(false)
  const [toast, setToast] = useState(0);
  const messagesEndRef = useRef(null);
  const sheetRef = useRef();
  const [active, setActive] = useState(1);
  const style = {
    mesage: 'mt-5 text-white shadow-xl bg-[#7D7AFF] rounded-xl text bubble w-60 py-5  px-2'
  }
  const clickHandler = (index) => {
    setActive((prev) => {
      return prev === index ? null : index;
    });

  };
  const handleSubmitMsg = (e) => {
    setMessage(e.target.value)
    setTimeout(() => {
      setOrderConfirm(true)
      setToast(1)
    }, 5000);
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  const navigators = [
    { name: 'Nachrichten', id: 1 },
    { name: 'Auftragsstatus', id: 2 },
  ]
  useEffect(() => {
    scrollToBottom()
  }, []);

  const sendMsg = ( ) => {
    setMessages(current => [...current, { msg: message, author: 'me' }])
    setMessage('')
  }


  return (
    <div style={{ overflowY: 'hidden', height: '100vh' }}>
      <div className='bg-white p-9 shadow-sm' >
        <div className='flex items-center justify-between'>
          <Link to='/user/1/message'>
            <p className='text-[#7D7AFF] text-[500] text-[16px]'>zur??ck</p>
          </Link>
          <div className='flex items-center ml-16'>
            <img src={avater} />
            <h1 className='text-[900] text-[14px] ml-5'>
              Thomas
              <p className='text-[#AAAFB6] text-[12px]'>Online</p>
            </h1>
          </div>
            <p className='text-[white] text-[500] text-[16px]'>zur??ck</p>
        </div>
        <div className='bg-slate-200 flex justify-evenly lg:w-[20%] md:w-[30%] w-[70%] lg:mx-[42%] md:mx-80 mx-16 mt-8 shadow-sm rounded-lg py-1'>
          {
            navigators.map((element) => <p key={element.id} onClick={() => clickHandler(element.id)} className={active === element.id ? 'font-[600] text-[11.346px] bg-white py-2 px-3 text-[#7D7AFF] rounded-lg' : 'py-2 px-3 text-[11.346px] text-black'}>{element.name}</p>)
          }
        </div>
      </div>

      <div style={{ overflowY: 'auto' }} className='h-3/4 pb-16'>

        {
          active === 1 ?
            (
              <>
                <div className='mx-5 flex flex-col items-end'>
                  <div className={style.mesage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                </div>
                <div className='mx-5 flex flex-col items-end' >
                  {
                    messages.map((element, index) => (
                      <div key={index} ref={messagesEndRef} className={style.mesage}>{element.msg}</div>
                    ))
                  }
                </div>
                {
                  messages?.[0] && (
                    <Link to='/order/info'>
                      <div className="lg:mx-20 mx-5 bg-white lg:w-96 w-80  pt-3 rounded-xl relative shadow-xl mt-3">
                        <div className='flex items-top px-3'>
                          <div className='relative'>
                            <img src={'https://i.ibb.co/S3cY7Ct/tesla.png'} />
                          </div>
                          <div className='ml-4'>
                            <p className='mt-1 font-black text-sm'>Tesla</p>
                            <p className='mt-1 text-[#838D95] text-[12px]'>Model 3</p>
                            <p className='mt-1 font-black text-sm'>30 ??? <span className='text-[#838D95] text-[12px]'>f??r 2 std</span>  </p>
                            <p className='bg-[#E6E6FF] text-[10px] text-[400] flex items-center rounded-lg px-2 py-1 w-22 mt-3'><MdDateRange className='mr-1' /> Do. 23. Juni  14:00 - 17:00</p>
                          </div>
                        </div>
                        <div className={orderConfirm ? 'bg-[#73D13D] text-white rounded-b-lg mt-3 px-3 py-2 ' : 'bg-[#FFE58F] rounded-b-lg mt-3 px-3 py-2 '}>
                          <p className='flex items-center justify-center text-[12px]'><AiOutlineClockCircle /> Auf Auftragsbest??tigung warten</p>
                        </div>
                      </div>
                    </Link>
                  )
                }
              </>
            )
            :
            (
              <>
                <div className='mx-5 lg:mx-10 mt-2 flex flex-col items-center ' >
                  <p className='p-2 rounded-xl bg-[#FFE58F] font-[900] text-[20px]'><BsClock /></p>
                  <p className='text-[20px] text-center font-[600]'>Warte auf <br /> Best??tigung</p>
                  <img src={car} className='w-[302px] h-[208px] mt-3 lg:hidden md:hidden block' />
                  <img src={car2} className='w-[888px] mt-3 lg:block md:block hidden' />
                </div>
                <div className='mx-5 lg:mx-10 pb-5'>
                  <div className='flex justify-between' >
                    <div>
                      <p className='text-[32px] font-[600]'>Tesla </p>
                      <span className='text-[10px] text-[#838D95]'>Model 3</span>
                    </div>
                    <p className='text-[32px] font-[600]'>30 ??? </p>
                  </div>
                  <DatePicker color='#E6E5FF' />
                  <p className='text-[12px] mb-5 w-40 font-[900] flex items-center mt-3'> Kilometer inklusive <AiOutlineInfoCircle className='ml-1' /></p>
                  <p className='text-[10px] mb-5 w-40 font-[600] flex items-center mt-3'><AiOutlineCheckCircle className=' font-[600] text-[#52C41A] mr-1 text-[15px]' /> 40km kostenlos </p>
                </div>

              </>
            )
        }
      </div>
      <div className='w-full'>
        {
          orderConfirm && (
            <BottomSheet
              open
              blocking={false}
              className='red'
              snapPoints={({ minHeight, maxHeight }) => [minHeight * toast]}
              ref={sheetRef}>
              <div className='py-5 flex flex-col items-center text-center w-full'>
                <AiOutlineCheckCircle onClick={() => setToast(0)} className='text-[29px] mb-5 font-[600] text-[#52C41A] ' />
                <p className='text-white text-[25px] font-[600] text-lg'>Thomas hat deinen <br /> Auftrag best??tigt</p>
                <Link to={`/order/info`}>
                  <button className="mt-5 mb-5 bg-[#7D7AFF] text-[14px] font-[500] text-white py-4 px-4 rounded-lg w-[300px]">
                    Anmietung best??tigen
                  </button>
                </Link>
                <p className='text-white text-[15px] font-[500] text-lg'>Anderes Auto suchen</p>
              </div>
            </BottomSheet>
          )
        }
      </div>
      {
        active === 1 ?
          (
            <div className='mx-auto right-0 left-0 bottom-5 absolute w-[62%] flex items-center'>
              <input onChange={(e) => handleSubmitMsg(e)} step={{ outline: 'none' }} className="shadow-lg rounded w-full py-4 px-3 text-gray-700  border-0" type="text" placeholder="Nachricht senden..." />
              <button onClick={() => sendMsg()} className='absolute right-5 bg-[#7D7AFF] p-1 rounded-lg shadow-xl text-white' >
                <AiOutlineArrowUp className='text-[25px] ' />
              </button>
            </div>
          )
          :
          (
            <div className='right-0 left-0 bottom-2 absolute  flex justify-around '>
              <Link to='/create/rent'>
                <button type='submit' className="bg-[#7D7AFF] text-[14px] font-[500] text-white px-10 py-3 rounded-lg w-full">
                  Anpassen oder Stornieren
                </button>
              </Link>
            </div>
          )
      }

    </div>
  )
}

export default Inbox