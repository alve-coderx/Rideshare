import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useSupplier = () => {
  const [text, setText] = useState(null)
  const navigate = useNavigate();

  const handleMessage = (msg) => {
    console.log(msg)
    setText(msg)
    navigate('/user/1/inbox')
  }

  return {
    text,
    handleMessage
  }
}

export default useSupplier