import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../store/user"

export default function Header(){
  const {user}= useContext(UserContext)

  return(
    <header className="ml-8 flex justify-between">
      <Link to={'/'} href="" className="flex items-center gap-2 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 -rotate-90 "><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
        <span className='font-bold text-2xl'>Nestaway</span>
      </Link>



      <div className="flex gap-4 m-5 border border-gray-300 rounded-full py-2 px-5 shadow-md shadow-gray-300">
        <div className="mt-1">Anywhere</div>
        <div className="border-l-2 border-gray-300"></div>
        <div className="mt-1">Any week</div>
        <div className="border-l-2 border-gray-300"></div>
        <div className="mt-1">Any guests</div>
        <button className="bg-primary text-white p-1 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>



      <Link to={user? '/account/profile':'/login'} className="flex  gap-4 m-4 border border-gray-300 rounded-full py-3 px-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 mt-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <div className=" mt-1 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>

        {!!user && <div className='mt-1 font-bold'>{user.name}</div>}
      </Link>
          
    </header>
  )
}