import React, { useEffect, useState } from 'react'
import InputText from './InputText';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
const Signup = () => {
   const [fullname, setName] = useState("");
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [authUser, setAuthUser]= useAuth();

  const clearInput = ()=>{
    setName("");
    setEmail("");
    setPassword("");
  }

  const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:4000/user/signup",{
          fullname, email, password
        });
        console.log(res);
        if(res.data){
            toast.success(res?.data?.message);
            localStorage.setItem("users",JSON.stringify(res?.data?.user));
            // setAuthUser(JSON.stringify(res?.data?.user));
            navigate("/")
            document.getElementById('signup_modal')?.close()
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "Something went wrong")
      }
  }

  return (
    <><dialog id="signup_modal" className="modal" onClose={clearInput}>
  <div className="modal-box dark:bg-black dark:outline-1 dark:text-white">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
      

    <form onSubmit={handleSubmit}>
    <h3 className="font-bold text-lg">Signup</h3>
      <div className="name my-3">
          <InputText type="text" placeholder="Enter your fullname." name="fullname" onChange={(e)=> setName(e.target.value)} value={fullname} required />
      </div>

      <div className="email my-3">
          <InputText type="email" placeholder="Enter your email." name="email" onChange={(e)=> setEmail(e.target.value)} value={email} required />
      </div>

      <div className="password my-3">
          <InputText type="password" placeholder="Enter your password." name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
      </div>
      <div className="password my-3 flex justify-around align-middle">
          <button className='btn rounded-xl bg-pink-500 text-white dark:bg-gray-400 dark:text-black border-0 '>Singup</button>
          <p className="">Aready register? <button className='text-blue-900 underline underline-offset-4 cursor-pointer' onClick={()=> {const signup = document.getElementById('signup_modal')?.close();
  const login = document.getElementById('my_modal_1');

  signup?.close();

  setTimeout(() => {
    login?.showModal();
  }, 200);}}>Login</button></p>
      </div>

  

    </form>
  
  </div>
</dialog>
    </>
  )
}

export default Signup