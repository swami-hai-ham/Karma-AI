import React from 'react'
import NavBar from '../components/NavBar'
import Todo from '../components/Todo'

const Dashboard = () => {
  return (
    <div className='text-white bg-slate-900'>
      <div className='bg-black text-white flex'>
        <NavBar></NavBar>
      </div>
        <div className='grid grid-cols-2'>
          <div className='bg-stone-900 h-screen border-r-2 border-stone-800 p-3'>
            <Todo></Todo>
          </div>
          <div className='bg-stone-900 h-screen border-l-2 border-stone-800 p-3'> hello</div>
        </div>
    </div>
  )
}

export default Dashboard
