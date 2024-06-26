import React from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { aiMsgAtom, todoAtom } from '../store/state';
import axios from 'axios';
import { hideSkeleton } from '../store/state';

interface InputBoxProps {
  todo: Record<string, string | number>;
}

const Todo: React.FC<InputBoxProps> = ({ todo }) => {
  const [aiMsg, setAiMsg] = useRecoilState(aiMsgAtom);
  const setHide = useSetRecoilState(hideSkeleton);
  const [todos, setTodos] = useRecoilState(todoAtom);

  return (
    <div className='p-3 bg-stone-700 rounded m-2 flex items-center'>
      <div className="flex gap-4 w-max">
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="green"
          >
            <input
              type="checkbox"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-yellow-500 checked:bg-yellow-500 checked:before:bg-yellow-500 hover:before:opacity-10"
              id="green"
              onClick={() => {
                setHide(true);
                const indexToDelete = todos.findIndex(todoh => todoh.id === todo.id);

                if (indexToDelete !== -1) {
                  const updatedTodos = [...todos];
                  updatedTodos.splice(indexToDelete, 1);
                  setTodos(updatedTodos);

                  axios.post('https://karma-b.onrender.com/api/v1/todos/tododone', {
                    todoid: todo.id
                  }, {
                    headers: {
                      "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                  }).then(response => {
                    const todomsg = response.data.responseMsg[0].text;
                    setHide(false);
                    setAiMsg([todomsg, ...aiMsg]);
                    console.log(aiMsg);
                  });
                }
              }}
            />
            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </label>
        </div>
      </div>
      <div className='flex-1 text-white font-mono m-3 font-semibold overflow-hidden'>{todo.title}</div>
    </div>
  );
};

export default Todo;