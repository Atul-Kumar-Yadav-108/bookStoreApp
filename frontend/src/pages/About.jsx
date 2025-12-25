import React from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
        <Navbar/>
            <div className="min-h-screen dark:bg-black dark:text-white flex justify-between items-center">
                <div className="about-section md:min-w-100 p-3">
                        <h1 className="text-2xl font-bold text-center">
                            About us
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolorem?</p>
                        <p><span className='text-blue-600'>Also visit paid books : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolorem?<NavLink to={"/course"} className="text-pink-500">Click here!!</NavLink></p>
                </div>
            </div>
        <footer/>
    </>
  )
}

export default About