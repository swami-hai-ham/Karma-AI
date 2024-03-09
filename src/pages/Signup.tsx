import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';

const Signup = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-stone-900 font-mono text-white'>
      <div className="bg-stone-800 p-5 w-96 rounded-md">
        <div className='flex justify-center'>
          <Heading Title='Sign Up'/>
        </div>
        <InputBox label='First Name' name='firstname' />
        <InputBox label='Last Name' name='lastname' />
        <InputBox label='Email' name='email' />
        <InputBox label='Password' name='password' />
        <div className='flex justify-center m-3 '>
          <button className="bg-stone-600 rounded-lg focus:text-yellow-500 text-white hover:bg-stone-900 p-3 text-lg font-semibold">
            Sign up
          </button>
        </div>
        <div className='flex justify-center mt-5 items-center'><div className='m-3'>Already have an account?</div><Link to='/signin' className='underline'>Signin</Link></div>
      </div>
    </div>
  )
}

export default Signup
