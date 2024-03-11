import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import InputBox from '../components/InputBox'
import Heading from '../components/Heading'
import { useNavigate } from 'react-router-dom';

const Coach = () => {
  const [aiName, setAiName] = useState('');
  const [imgLink, setImgLink] = useState('');
  const navigate = useNavigate();

  return (
    <div className='bg-stone-900 h-screen'>
      <NavBar />
      <div className='flex justify-center items-center text-stone-900 h-screen'>
        <div className='bg-yellow-500 p-3 flex flex-col items-center font-mono rounded-lg w-80 mb-14'>
            <Heading Title={"AI Coach"}/>
            <InputBox label='Coach Name' name='coach' onChange={(e) => {
              setAiName(e.target.value);
            }}/>
            <InputBox label='Image Link' name='link' onChange={(e) => {
              setImgLink(e.target.value);
            }}/>
            <div className='flex justify-center m-3 '>
          <button className=" rounded-lg focus:text-yellow-500 text-stone-900 hover:text-yellow-500 hover:bg-stone-900 focus:bg-stone-900 p-3 text-lg font-semibold" onClick={() => {
            navigate('/dashboard')
          }}>
            Submit
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Coach
