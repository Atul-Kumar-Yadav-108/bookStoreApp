import React, { useEffect, useState } from 'react'
import InputText from './InputText'
import { Link } from 'react-router-dom';
import Signup from './Signup';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const clearInput = ()=>{
    setEmail("");
    setPassword("");
  }
  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(email, password);
  }
  return (
    <><dialog id="my_modal_1" className="modal" onClose={clearInput}>
  <div className="modal-box dark:bg-black dark:outline-1 dark:text-white">
    <form method="dialog" >
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form> 
     <form onSubmit={handleSubmit}>
    <h3 className="font-bold text-lg">Login</h3>
      <div className="email my-3">
          <InputText type="email" placeholder="Enter your email." name="email" onChange={(e)=> setEmail(e.target.value)} value={email} required />
      </div>

      <div className="password my-3">
          <InputText type="password" placeholder="Enter your password." name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      </div>
      <div className="password my-3 flex justify-around align-middle">
          <button className='btn rounded-xl bg-pink-500 text-white dark:bg-gray-400 dark:text-black border-0 '>Login</button>
          <p className="">Not register? <button className='text-blue-900 underline underline-offset-4 cursor-pointer' onClick={()=>{document.getElementById('my_modal_1')?.close();document.getElementById("signup_modal")?.showModal()}}>Signup</button></p>
      </div>
    </form>
          <Signup/>
  </div>
</dialog>
    </>
  )
}

export default Login