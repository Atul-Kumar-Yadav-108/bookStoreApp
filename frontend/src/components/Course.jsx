import React from 'react'
import bookLists from "../../public/booklists.json"
import Card from './Card';
import { NavLink } from 'react-router-dom';

const Course = () => {
    // const books = bookLists.filter((book)=> book.category !== "free");
    
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='pt-28 text-center justify-center items-center space-y-6'>
                    <h1 className="text-2xl md:text-4xl">
                        We're delight to have you <span className='text-pink-500'>Here! :)</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quos accusantium adipisci consequuntur fugit natus repellat dolores deleniti incidunt saepe numquam, illo assumenda voluptatem! Laborum provident officia eaque sit corporis!</p>
                    <NavLink to={"/"} className='bg-pink-500 cursor-pointer px-5 py-2 text-white font-bold rounded-lg hover:bg-pink-600 transition duration-300 outline-0 active:bg-pink-300 '>Back</NavLink>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
                    {
                        bookLists.map((book)=>{
                            return <Card item={book} key={book.id}/>
                        })
                    }
                </div>
        </div>
    </>
  )
}

export default Course