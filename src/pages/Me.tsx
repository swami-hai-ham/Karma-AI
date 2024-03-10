import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Me = () => {
  return (
    <div className='flex bg-stone-900 h-screen justify-center items-center'>
      <div className='text-white'>
      <Spinner color='yellow.500' size="xl" thickness='4px' emptyColor='RGBA(0, 0, 0, 0.48)'/>
      </div>
    </div>
  )
}

export default Me
