import { Link, useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import { useState } from 'react';
import InputVal from '../components/InputVal';
import { emailS, passwordS, nameS } from '../zod/schema';
import axios from 'axios';

const Signup = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('0')
  const navigate = useNavigate();
  const [errComp, setErrComp] = useState("");

  return (
    <div className='flex justify-center items-center h-screen bg-stone-900 font-mono text-white'>
      <div className="bg-stone-800 p-5 w-96 rounded-md">
        <div className='flex justify-center'>
          <Heading Title='Sign Up'/>
        </div>
        <InputBox label='First Name' name='firstname' onChange={(e) => {
          setFName(e.target.value);
        }}/>
        {errComp == "fname" && <InputVal errorMessage='Please input your first name'/>}
        <InputBox label='Last Name' name='lastname' onChange={(e) => {
          setLName(e.target.value);
        }}/>
        {errComp == "lname" && <InputVal errorMessage='Please input your last name'/>}
        <InputBox label='Email' name='email' onChange={(e) => {
          setEmail(e.target.value);
        }}/>
        {errComp == "email" && <InputVal errorMessage='Input must be a valid email'/>}
        {errComp == "Etaken" && <InputVal errorMessage='Email already taken'/>}
        <InputBox label='Password' name='password' type="password" onChange={(e) => {
          setPassword(e.target.value);
        }}/>
        {errComp == "password" && <InputVal errorMessage='Password must contain at least 6 characters'/>}
        <div className='flex justify-center m-3 '>
          <button className="bg-stone-600 rounded-lg focus:text-yellow-500 text-white hover:bg-stone-900 p-3 text-lg font-semibold" onClick={() => {
            const resultFN = nameS.safeParse(fName);
            const resultLN = nameS.safeParse(lName);
            const resulte = emailS.safeParse(email);
            const resultp = passwordS.safeParse(password);
            
            if(!resultFN.success){
              setErrComp('fname')
            }
            if(!resultLN.success){
              setErrComp('lname')
            }
            if(!resulte.success){
              setErrComp('email')
            }
            if(!resultp.success){
              setErrComp('password')
            }

            if(resulte.success && resultp.success && resultFN.success && resultLN.success){
              setLoading("1")
              axios.post('https://karma-b.onrender.com/api/v1/user/signup', {
                "email": resulte.data,
                "firstName": resultFN.data,
                "lastName": resultLN.data,
                "password": resultp.data
              }).then(response => {
                  localStorage.setItem("token", response.data.token);
                  navigate('/me');
              }).catch(error => {
                if(error.response.status == 400){
                  setErrComp('Etaken')
                  setLoading("0")
                }else{
                  setErrComp('Internal')
                  setLoading("0")
                }
              });
            }
          }}>
            {loading === "0" ? "Sign up" : loading === "1" ? "Loading..." : null}
          </button>
          
        </div>
        <div className='flex justify-center items-center'>{errComp == "Internal" && <InputVal errorMessage='Internal Server Error'/>}</div>
        <div className='flex justify-center mt-5 items-center'><div className='m-3'>Already have an account?</div><Link to='/signin' className='underline'>Signin</Link></div>
      </div>
    </div>
  )
}

export default Signup
