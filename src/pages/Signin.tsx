import { Link, useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import { useState } from 'react';
import InputVal from '../components/InputVal';
import { emailS, passwordS } from '../zod/schema';
import axios from 'axios';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errComp, setErrComp] = useState("");
  const [loading, setLoading] = useState('0')

  return (
    <div className="flex justify-center items-center h-screen bg-stone-900 font-mono text-white">
      <div className="bg-stone-800 p-5 w-96 rounded-md">
        <div className='flex justify-center'>
        <Heading Title="Sign in"/>
        </div>
        <InputBox label={'Email'} name={"Email"}  onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
        {errComp == "email" && <InputVal errorMessage='Input must be a valid email'/>}
        {errComp == "AnotE" && <InputVal errorMessage='Account does not Exist'/>}
        <InputBox label={'Password'} name={"Password"}  onChange={(e) => {
          setPassword(e.target.value)
        }}/>
        {errComp == "password" && <InputVal errorMessage='Password must contain at least 6 characters'/>}
        {errComp == "AnotE" && <InputVal errorMessage='Or Incorrect Password'/>}
        <div className='flex justify-center m-3 '>
          <button className="bg-stone-600 rounded-lg focus:text-yellow-500 text-white hover:bg-stone-900 p-3 text-lg font-semibold" onClick={() => {
            const resulte = emailS.safeParse(email);
            const resultp = passwordS.safeParse(password);
            if(!resulte.success){
              setErrComp('email')
            }
            if(!resultp.success){
              setErrComp('password')
            }

            if(resulte.success && resultp.success){
              setLoading("1")
              axios.post('https://karma-b.onrender.com/api/v1/user/signin', {
                "email": resulte.data,
                "password": resultp.data
              }).then(response => {
                console.log(response);
                localStorage.setItem("token", response.data.token);
                navigate('/me');
              }).catch(error => {
                console.error(error);
                if(error.response.status == 401){
                  setErrComp('AnotE')
                  setLoading("0")
                }else{
                  setErrComp('Internal')
                  setLoading("0")
                }
              });
            }
          }}>
            {loading === "0" ? "Sign in" : loading === "1" ? "Loading..." : null}
          </button>
        </div>
        <div className='flex justify-center items-center'>{errComp == "Internal" && <InputVal errorMessage='Internal Server Error'/>}</div>
        <div className='flex justify-center mt-5 items-center'><div className='m-3'>Don't have an account?</div><Link to='/signup' className='underline'>Signup</Link></div>
      </div>
  </div>
  )
}

export default Signin
