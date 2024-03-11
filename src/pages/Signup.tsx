import { Link, useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import { useState } from 'react';

const Signup = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center h-screen bg-stone-900 font-mono text-white'>
      <div className="bg-stone-800 p-5 w-96 rounded-md">
        <div className='flex justify-center'>
          <Heading Title='Sign Up'/>
        </div>
        <InputBox label='First Name' name='firstname' onChange={(e) => {
          setFName(e.target.value);
        }}/>
        <InputBox label='Last Name' name='lastname' onChange={(e) => {
          setLName(e.target.value);
        }}/>
        <InputBox label='Email' name='email' onChange={(e) => {
          setEmail(e.target.value);
        }}/>
        <InputBox label='Password' name='password' onChange={(e) => {
          setPassword(e.target.value);
        }}/>
        <div className='flex justify-center m-3 '>
          <button className="bg-stone-600 rounded-lg focus:text-yellow-500 text-white hover:bg-stone-900 p-3 text-lg font-semibold" onClick={() => {
            navigate('/coach')
          }}>
            Sign up
          </button>
        </div>
        <div className='flex justify-center mt-5 items-center'><div className='m-3'>Already have an account?</div><Link to='/signin' className='underline'>Signin</Link></div>
      </div>
    </div>
  )
}

export default Signup
