import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

const Page = () => {
  return (
    <>
        <div className="dark:bg-black dark:text-white">
                  <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/> 
        </div>
    </>
  )
}

export default Page