import {useEffect} from 'react'
import { Spinner } from '@chakra-ui/react'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import {userAtom, aiMsgAtom, todoAtom, aiAtom} from '../store/state'
import { useNavigate } from 'react-router-dom';

const Me = () => {
  const[user, setUser] = useRecoilState(userAtom);
  const[ai, setAI] = useRecoilState(aiAtom);
  const[todos, setTodos] = useRecoilState(todoAtom);
  const[aiMsgs, setAiMsgs] = useRecoilState(aiMsgAtom);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        if(!localStorage.getItem('token')){
          navigate("/signin")
        }else{
          axios.get("https://karma-b.onrender.com/api/v1/user/user", {
            headers:{
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
          }).then(response => {
            if(response.data.aiConfig == null){
              navigate('/coach')
            }else{
              setUser(response.data)
              console.log(user)
              setTodos([...response.data.todoLists])
              console.log(todos)
              setAI(response.data.aiConfig)
              console.log(ai)
              axios.post('https://karma-b.onrender.com/api/v1/todos/reload', {}, {
                headers: {
                  "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
              }).then(response => {
                const resmsg: string = response.data.responseMsg[0].text
                setAiMsgs([resmsg])
                console.log(aiMsgs)
                navigate("/dashboard")
              })
            }
          })
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function
  }, []);
  return (
    <div className='flex bg-stone-900 h-screen justify-center items-center'>
      <div className='text-white'>
      <Spinner color='yellow.500' size="xl" thickness='4px' emptyColor='RGBA(0, 0, 0, 0.48)'/>
      </div>
    </div>
  )
}

export default Me
