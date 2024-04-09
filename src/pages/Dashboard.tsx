import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Todo from '../components/Todo'
import AiNav from '../components/AiNav'
import TodoAdd from '../components/TodoAdd'
import { Skeleton, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react'
import {useRecoilValue} from 'recoil';
import { hideSkeleton } from '../store/state'
import AIMsgWOType from '../components/AiMsgWOType'
import { useRecoilState } from 'recoil'
import { userAtom, aiMsgAtom, todoAtom } from '../store/state'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const hide = useRecoilValue(hideSkeleton)
  const[user, setUser] = useRecoilState(userAtom);
  const[todos, setTodos] = useRecoilState(todoAtom);
  const[aiMsgs, setAiMsgs] = useRecoilState(aiMsgAtom);
  const navigate = useNavigate()
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate('/me'); // Redirect to '/me' if user object is empty
    }
  })
  
  return (
    <div className='text-white bg-stone-900 min-h-screen'>
      <div className='bg-black text-white flex'>
        <NavBar></NavBar>
      </div>
        <div className='grid grid-cols-2'>
          <div className='bg-stone-900  border-r-2 border-stone-800 min-h-screen'>
            <TodoAdd></TodoAdd>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} />
              })}
          </div>
          <div className='bg-stone-900 border-l-2 border-stone-800 p-3'>
            <AiNav></AiNav>
            {hide && <Box padding='6' boxShadow='xl' bg=''>
              <SkeletonCircle size='10' />
              <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>}
            {aiMsgs.map((aimsg, index) => {
              return <AIMsgWOType key={index} msg={aimsg} />
      })}
          </div>
        </div>
    </div>
  )
}

export default Dashboard;