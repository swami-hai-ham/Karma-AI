import { useState, useRef } from "react";
import InputVal from "./InputVal";
import { todoS } from "../zod/schema";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { todoAtom, userAtom, aiMsgAtom, hideSkeleton } from "../store/state";
import axios from 'axios';

const TodoAdd = () => {
  const [todos, setTodos] = useRecoilState(todoAtom)
  const user = useRecoilValue(userAtom)
  const [todo, setTodo] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [aiMsg, setAiMsg] = useRecoilState(aiMsgAtom);
  const setHide = useSetRecoilState(hideSkeleton);
  const inputRef = useRef(null);
  return (
    <div className="m-2 p-3">
      <div className="flex items-center justify-between p-2">
  <div className="flex flex-grow items-center justify-between">
    <label htmlFor="small-input" className="block mb-2 font-medium">
      Add Todo
    </label>
    
    <button className="ml-2 px-4 py-2 bg-yellow-500 text-stone-900 font-bold font-mono hover:text-white hover:bg-red-500 rounded-md" onClick={async () => {
      if(!todoS.safeParse(todo).success){
        console.log(todo)
        setIsErr(true);
      }else{
        axios.post('https://karma-b.onrender.com/api/v1/todos/todo', {
        userId: user.id,
        title: todo
      }, {
        headers:{
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        console.log(response.data.todo)
        setTodos([...todos, response.data.todo])
        if(setIsErr) setIsErr(false);
        inputRef.current.value = "";
        setTodo("")
      })
      }
      
      
    }}>Add</button>
  </div>
  
  <button type="button" className="focus:outline-none text-white bg-green-500 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:bg-green-600 dark:hover:bg-green-700" onClick={async () => {
    setHide(true)
    axios.post('https://karma-b.onrender.com/api/v1/todos/planned', {}, 
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      const todomsg = response.data.responseMsg[0].text;
      setHide(false);
      setAiMsg([todomsg, ...aiMsg]);
      console.log(aiMsg);
    })
  }}>Planned</button>
</div>
      <input
        type="text"
        id="small-input"
        className="block w-full p-2 bg-stone-700 text-white border  rounded-lg"
        ref={inputRef}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      {isErr && <InputVal errorMessage="Todo cannot exceed 30 characters & cannot be empty"/>}
    </div>
  );
};

export default TodoAdd;
