import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import InputBox from '../components/InputBox'
import Heading from '../components/Heading'
import { useNavigate } from 'react-router-dom';
import InputVal from '../components/InputVal';
import { nameS, linkS } from '../zod/schema';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { aiAtom } from '../store/state';


const Coach = () => {
  const [aiName, setAiName] = useState('');
  const [imgLink, setImgLink] = useState('');
  const navigate = useNavigate();
  const [errComp, setErrComp] = useState("");
  const setAi = useSetRecoilState(aiAtom)
  const [loading, setLoading] = useState('0')
  return (
    <div className='bg-stone-900 h-screen'>
      <NavBar />
      <div className='flex justify-center items-center text-stone-900 h-screen'>
        <div className='bg-yellow-500 p-3 flex flex-col items-center font-mono rounded-lg w-80 mb-14'>
            <Heading Title={"AI Coach"}/>
            <InputBox label='Coach Name' name='coach' onChange={(e) => {
              setAiName(e.target.value);
            }}/>
            <div className='mr-28'>{errComp == "name" && <InputVal errorMessage='Name cannot be Empty!'/>}</div>
            <InputBox label='Image Link' name='link' onChange={(e) => {
              setImgLink(e.target.value);
            }}/>
            <div className='mr-10'>{errComp == "link" && <InputVal errorMessage='Image link should be valid url'/>}</div>
            <div className='flex justify-center m-3 '>
          <button className=" rounded-lg focus:text-yellow-500 text-stone-900 hover:text-yellow-500 hover:bg-stone-900 focus:bg-stone-900 p-3 text-lg font-semibold" onClick={() => {
            if(!nameS.safeParse(aiName).success){
              setErrComp('name')
            }
            if(!linkS.safeParse(imgLink).success){
              setErrComp('link')
            }
            if(nameS.safeParse(aiName).success && linkS.safeParse(imgLink).success){
              setLoading("1")
              axios.post("https://karma-b.onrender.com/api/v1/ai/aiconfig", {
                "aiName": aiName,
                "imageUrl": imgLink
              }, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
              })
              .then(response => {
                setAi(response.data.ai);
                console.log(response.data.ai);
              })
              .catch(error => {
                console.log(error)
              });
              setTimeout(() => {
                navigate('/me');
              }, 2000);
            }
          }}>
           {loading === "0" ? "Submit" : loading === "1" ? "Loading..." : null}
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Coach
