import { useRecoilValue } from 'recoil';
import { aiAtom } from '../store/state';

const AiNav = () => {
  const ai= useRecoilValue(aiAtom)
  return (
    <div className='flex flex-1 items-center text-2xl font-medium bg-stone-700 p-3 rounded-md text-white'>
        <div className="w-14 h-14 overflow-hidden">
            <img className="w-full h-full object-cover rounded-full" src={String(ai.imageUrl)} alt="Rounded avatar" />
        </div>
        <span className='p-3 font-mono'>{ai.aiName}</span>




    </div>
  )
}

export default AiNav
