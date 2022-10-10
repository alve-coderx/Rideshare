import React from 'react';
import useSupplier from '../../../Hook/useSupplier';
import avater from '../../../assets/avater.png'
import { AiOutlineArrowUp, AiOutlineCheckCircle } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { AiOutlineClockCircle } from 'react-icons/ai'
import './style.css'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { MdDateRange } from 'react-icons/md';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { Link } from 'react-router-dom';
const Inbox = () => {
  const { text } = useSupplier()
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const [orderConfirm, setOrderConfirm] = useState(false)
  const [toast, setToast] = useState(0)
  const messagesEndRef = useRef(null)
  const sheetRef = useRef()

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

  useEffect(() => {
    scrollToBottom()
  }, [messages]);
  return (
    <div >
      <div className='flex items-center bg-white p-9 shadow-xl'>
        <p className='text-[#7D7AFF] text-[500] text-[16px]'>zurück</p>
        <div className='flex items-center ml-16'>
          <img src={avater} />
          <p className='text-[900] text-[14px] ml-5'>
            Thomas
            <p className='text-[#AAAFB6] text-[12px]'>Online</p>
          </p>
        </div>
      </div>
      <div style={{ overflowY: 'scroll', maxHeight: '500px' }}>
        <div className='mx-5 flex flex-col items-end' >
          {
            messages.map((element, index) => (
              <div ref={messagesEndRef} contentEditable="true" className="mt-5 mr-3 text-white shadow-xl bg-[#7D7AFF] rounded-xl speech bubble w-60 py-5  px-2">{element.msg}</div>
            ))
          }
        </div>
        {
          messages?.[0] && (
            <div class="mx-6 bg-white  pt-3 rounded-xl relative shadow-xl mt-3">
              <div className='flex items-top px-3'>
                <div className='relative'>
                  <span className='absolute top-1 left-1 bg-[#7D7AFF] text-white text-sm flex items-center rounded-lg p-1'><GoLocation /> 20 km</span>
                  <img src={'https://i.ibb.co/S3cY7Ct/tesla.png'} />
                </div>
                <div className='ml-4'>
                  <p className='mt-1 font-black text-sm'>Tesla</p>
                  <p className='mt-1 text-[#838D95] text-sm'>Model 3</p>
                  <p className='mt-1 font-black text-sm'>30 € <span className='text-[#838D95]'>für 2 std</span>  </p>
                  <p className='bg-[#E6E6FF] text-[10px] text-[400] flex items-center rounded-lg px-2 py-1 w-22 mt-3'><MdDateRange className='mr-1' /> Do. 23. Juni  14:00 - 17:00</p>
                </div>
              </div>
              <div className={orderConfirm ? 'bg-[#73D13D] text-white rounded-b-lg mt-3 px-3 py-2 ' : 'bg-[#FFE58F] rounded-b-lg mt-3 px-3 py-2 '}>
                <p className='flex items-center justify-center text-[12px]'><AiOutlineClockCircle /> Auf Auftragsbestätigung warten</p>
              </div>
            </div>
          )
        }
      </div>
      {
        orderConfirm && (
          <BottomSheet open
            blocking={false}
            className='red'
            snapPoints={({ minHeight, maxHeight }) => [minHeight * toast]}
            ref={sheetRef}>
            <div className='mx-5 py-5 flex flex-col items-center text-center'>
              <AiOutlineCheckCircle className='text-[29px] mb-5 font-[600] text-[#52C41A] ' />
              <p className='text-white text-[25px] font-[600] text-lg'>Thomas hat deinen Auftrag bestätigt</p>
              <Link to={`/order/info`}>
                <button className="mt-5 mb-5 bg-[#7D7AFF] text-[14px] font-[500] text-white py-4 px-4 rounded-lg w-full">
                  Anmietung bestätigen
                </button>
              </Link>
              <p className='text-white text-[15px] font-[500] text-lg'>Anderes Auto suchen</p>
            </div>
          </BottomSheet>
        )
      }
      <div className='mx-auto right-0 left-0 bottom-2 absolute w-[92%] flex items-center'>
        <AiOutlineArrowUp onClick={() => setMessages(current => [...current, { msg: message, author: 'me' }])} className='absolute right-5 bg-[#7D7AFF] p-1 text-[30px] rounded-lg shadow-xl text-white' />
        <input onChange={(e) => handleSubmitMsg(e)} step={{ outline: 'none' }} className="shadow-lg rounded w-full py-2 px-3 text-gray-700  border-0" id="username" type="text" placeholder="Nachricht senden..." />
      </div>

    </div>
  )
}

export default Inbox