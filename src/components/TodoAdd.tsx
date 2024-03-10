import React from 'react';

const TodoAdd = () => {
  return (
    <div className="m-2 p-3">
      <div className="flex items-center justify-between p-2">
        <label htmlFor="small-input" className="block mb-2  font-medium">
          Add Todo
        </label>
        <button className="ml-2 px-4 py-2 bg-yellow-500 text-stone-900 font-bold font-mono focus:text-white focus:bg-red-500 rounded-md">Add</button>
      </div>
      <input
        type="text"
        id="small-input"
        className="block w-full p-2 bg-stone-700 text-white border  rounded-lg"
      />
    </div>
  );
};

export default TodoAdd;
