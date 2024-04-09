import React from 'react';
import Typewriter  from '../components/Typewriter';
import { useRecoilValue } from 'recoil';
import { aiAtom } from '../store/state';

interface AiMsgProps {
  msg: string;
}

const AiMsg: React.FC<AiMsgProps> = ({ msg }) => {
  const ai = useRecoilValue(aiAtom);

  return (
    <div className='bg-yellow-500 text-stone-900 m-3 pt-1 rounded'>
      <div className='flex items-center mt-2'>
        <div className="w-10 h-10 overflow-hidden ml-5 mt-1">
          <img className="w-full h-full object-cover rounded-full" src={ai.imageUrl} alt="Rounded avatar" />
        </div>
        <div className='font-mono font-semibold text-lg ml-4 mt-1'>{ai.aiName}</div>
      </div>
      <div className="bg-yellow-500 text-stone-900 flex items-center ml-3">
        <p className="break-words p-2 m-1 font-semibold">
        <Typewriter
            speed={50} text={msg} 
          />
        </p>
      </div>
    </div>
  );
};

export default AiMsg;