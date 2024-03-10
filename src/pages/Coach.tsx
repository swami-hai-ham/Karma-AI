import React from 'react'
import NavBar from '../components/NavBar'
import InputBox from '../components/InputBox'
import Heading from '../components/Heading'

const Coach = () => {
  return (
    <div className='bg-stone-900 h-screen'>
      <NavBar />
      <div className='flex justify-center items-center text-stone-900 h-screen'>
        <div className='bg-yellow-500 p-3 flex flex-col items-center font-mono rounded-lg w-80 mb-14'>
            <Heading Title={"AI Coach"}/>
            <InputBox label='Coach Name'/>
            <InputBox label='Image Link'/>
            <div className='flex justify-center m-3 '>
          <button className=" rounded-lg focus:text-yellow-500 text-stone-900 hover:text-yellow-500 hover:bg-stone-900 focus:bg-stone-900 p-3 text-lg font-semibold">
            Submit
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Coach
