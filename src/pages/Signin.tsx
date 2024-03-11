import { Link, useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import { useState } from 'react';
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  return (
    <div className="flex justify-center items-center h-screen bg-stone-900 font-mono text-white">
      <div className="bg-stone-800 p-5 w-96 rounded-md">
        <div className='flex justify-center'>
        <Heading Title="Sign in"/>
        </div>
        <InputBox label={'Email'} name={"Email"}  onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
        <InputBox label={'Password'} name={"Password"}  onChange={(e) => {
          setPassword(e.target.value)
        }}/>
        <div className='flex justify-center m-3 '>
          <button className="bg-stone-600 rounded-lg focus:text-yellow-500 text-white hover:bg-stone-900 p-3 text-lg font-semibold" onClick={() => {
            navigate('/dashboard')
          }}>
            Sign in
          </button>
        </div>
        <div className='flex justify-center mt-5 items-center'><div className='m-3'>Don't have an account?</div><Link to='/signup' className='underline'>Signup</Link></div>
      </div>
  </div>
  )
}

export default Signin
