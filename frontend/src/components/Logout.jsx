import React from 'react'
import { useAuth } from '../context/AuthProvider'

const Logout = () => {
    const [authUser, setAuthUser, logout] = useAuth(); // ✅ array destructuring

    // console.log("login",authUser);
  return (
    <>
           <button className="btn dark:hover:bg-slate-600 duration-300 dark:bg-gray-400 dark:text-black" onClick={()=>logout()}>logout</button>
    </>
  )
}

export default Logout