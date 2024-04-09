import { useState } from "react";
import InputVal from "./InputVal";
import { todoS } from "../zod/schema";
import { useRecoilState } from "recoil";
import { todoAtom, userAtom } from "../store/state";
import axios from 'axios';

const TodoAdd = () => {
  const [todos, setTodos] = useRecoilState(todoAtom)
  const [user, setUser] = useRecoilState(userAtom)
  const [todo, setTodo] = useState("");
  const [isErr, setIsErr] = useState(false);
  return (
    <div className="m-2 p-3">
      <div className="flex items-center justify-between p-2">
        <label htmlFor="small-input" className="block mb-2  font-medium">
          Add Todo
        </label>
        <button className="ml-2 px-4 py-2 bg-yellow-500 text-stone-900 font-bold font-mono focus:text-white focus:bg-red-500 rounded-md" onClick={async () => {
          if(!todoS.safeParse(todo).success){
            console.log(todo)
            setIsErr(true);
          }
          
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
          })
          
        }}>Add</button>
      </div>
      <input
        type="text"
        id="small-input"
        className="block w-full p-2 bg-stone-700 text-white border  rounded-lg"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      {isErr && <InputVal errorMessage="Todo cannot exceed 30 characters & cannot be empty"/>}
    </div>
  );
};

export default TodoAdd;
