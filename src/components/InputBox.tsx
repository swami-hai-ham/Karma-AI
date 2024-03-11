import React from 'react';

interface InputBoxProps {
  label?: string;
  name: string;
  type?: 'text' | 'number' | 'email' | 'password' | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ label, name, type = 'text', onChange }) => {
  return (
    <div className="flex flex-col p-3 w-full">
      {label && <label htmlFor={name} className=" text-sm font-medium">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        className="border-0 focus:outline-none focus:ring-1 focus:ring-yellow-500 w-full text-black rounded-md px-3 py-2 w-full"
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
