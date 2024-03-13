import { useState } from "react";
import InputVal from "./InputVal";
import { todoS } from "../zod/schema";

const TodoAdd = () => {
  const [todo, setTodo] = useState("");
  const [isErr, setIsErr] = useState(false);
  return (
    <div className="m-2 p-3">
      <div className="flex items-center justify-between p-2">
        <label htmlFor="small-input" className="block mb-2  font-medium">
          Add Todo
        </label>
        <button className="ml-2 px-4 py-2 bg-yellow-500 text-stone-900 font-bold font-mono focus:text-white focus:bg-red-500 rounded-md" onClick={() => {
          if(!todoS.safeParse(todo).success){
            console.log(todo)
            setIsErr(true);
          }
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
