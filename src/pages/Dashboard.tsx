import React from 'react'
import NavBar from '../components/NavBar'
import Todo from '../components/Todo'
import AiNav from '../components/AiNav'
import AiMsg from '../components/AiMsg'
import TodoAdd from '../components/TodoAdd'
import { Skeleton, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <div className='text-white bg-slate-900'>
      <div className='bg-black text-white flex'>
        <NavBar></NavBar>
      </div>
        <div className='grid grid-cols-2'>
          <div className='bg-stone-900 h-screen border-r-2 border-stone-800 p-3'>
            <TodoAdd></TodoAdd>
            <Todo></Todo>
          </div>
          <div className='bg-stone-900 h-screen border-l-2 border-stone-800 p-3'>
            <AiNav></AiNav>
            <AiMsg></AiMsg>
            <Box padding='6' boxShadow='xl' bg=''>
              <SkeletonCircle size='10' />
              <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
          </div>
        </div>
    </div>
  )
}

export default Dashboard;