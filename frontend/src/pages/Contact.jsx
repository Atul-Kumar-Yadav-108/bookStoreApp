import React, { useState } from 'react'
import InputText from '../components/InputText'
import Navbar from '../components/Navbar';

const Contact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name, email, message);
    }
  return (
    <>
        <Navbar/>
        <div className="min-h-screen dark:bg-black dark:text-white flex justify-center items-center">
            <form className='md:min-w-100' onSubmit={handleSubmit}>
                        <h1 className='text-2xl mb-5 font-bold'>Contact Us</h1>
                        <div className="name mb-5">
                            <InputText type="text" placeholder="Enter your name" name="name"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            required/>
                        </div>
                            
                        <div className='email mb-5'>
                            <InputText type="email" placeholder="email address" name="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            required/>
                        </div>
                                
                        <div className="message mb-5">
                            <textarea name="message"
                             className="input dark:bg-black dark:text-white dark:shadow-amber-50 shadow-sm outline-0 border-amber-100 h-auto"
                            rows="5"
                             id="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Type your message' required></textarea>
                        </div>
                        <div className="submit">
                             <button className='btn rounded-xl bg-pink-500 text-white dark:bg-gray-400 dark:text-black border-0 '>Singup</button>
                        </div>
            </form>
        </div>
        <footer/>
    </>
  )
}

export default Contact