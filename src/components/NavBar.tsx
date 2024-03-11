import { useNavigate } from "react-router-dom"


const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-yellow-500 text-stone-900 font-mono font-bold uppercase p-4 flex-1'>
      <div className="navbar bg-base-300 flex justify-between">
        <div>
          <button className="btn btn-ghost text-xl mx-3 hover:bg-yellow-500 focus:border-b-2 focus:border-b-slate-900 hover:text-stone-700 p-2" onClick={() => {
            navigate('/dashboard');
          }}>Dashboard</button>
          <button className="btn btn-ghost text-xl mx-3 hover:bg-yellow-500 focus:border-b-2 focus:border-b-slate-900 hover:text-stone-700 p-2" onClick={() => {
            navigate('/coach');
          }}>Coach</button>
        </div>
        <div>
        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 font-mono font-bold">Logout</button>
        </div>
        
      </div>
    </div>
  )
}

export default NavBar