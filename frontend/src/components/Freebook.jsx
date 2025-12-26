import React from 'react'
import booklist from "../../public/booklists.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Freebook = () => {
      // const books = bookLists.filter((book)=> book.category !== "free");
      const [books, setBooks] = useState([]);
      
      useEffect(()=>{
          try {
              const getBook = async()=>{
                  const res = await axios.get('http://localhost:4000/book');
                  // console.log("bahut ssare result ",res.data);
                  const data = res.data.filter((book)=>{
                    return book.category === "free"
                  })
                  setBooks(data);
              }
              getBook()
          } catch (error) {
              console.log(error);
          } 
      },[])
    // const freebooks = booklist.filter((book)=>{
    //     return book.category === "free";
    // })
    // console.log(freebooks);

     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mb-10 space-y-6'>
            <div>
                            <h1 className='text-xl font-bold pb-2'>Free Offered Course</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor cum repudiandae, repellendus tempore distinctio id nobis, perspiciatis a ipsam laboriosam odit dignissimos est corrupti?</p>
            </div>

        <div className='slider-container'>
             <Slider {...settings}>
               {
                books.map((book)=>{
                    return <Card item={book} key={book.id}/>
                })
               }
            </Slider>
        </div>
        
        </div>
    </>
  )
}

export default Freebook