import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

interface AiMsgProps {
  msg: string;
}

const AiMsg: React.FC<AiMsgProps> = ({ msg }) => {
  return (
    <div className='bg-yellow-500 text-stone-900 m-3 pt-1 rounded'>
      <div className='flex items-center mt-2'>
        <div className="w-10 h-10 overflow-hidden ml-5 mt-1">
          <img className="w-full h-full object-cover rounded-full" src="https://run247.com/wp-content/uploads/2023/03/david-goggins-400cg.jpg" alt="Rounded avatar" />
        </div>
        <div className='font-mono font-semibold text-lg ml-4 mt-1'>David Goggins</div>
      </div>
      <div className="bg-yellow-500 text-stone-900 flex items-center ml-3">
        <p className="break-words p-2 m-1 font-semibold">
          <TypeWriterEffect
            startDelay={20}
            hideCursorAfterText="true"
            text={msg}
            typeSpeed={12}
          />
        </p>
      </div>
    </div>
  );
};

export default AiMsg;