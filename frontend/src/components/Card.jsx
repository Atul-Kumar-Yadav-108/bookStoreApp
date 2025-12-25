import React from 'react'

function Card({item}) {
  return (
    <>
    <div className='my-3 transition dark:border-2 dark:rounded-2xl dark:me-4 duration-300 hover:scale-103 dark:bg-black dark:text-white'>
        <div className="card bg-base-100 dark:border-amber-50 shadow-xl md:mx-3  dark:bg-black dark:text-white">
  <figure>
    <img
      src={item.image}
      className='w-56'
      alt="Shoes" />
  </figure>
  <div className="card-body dark:bg-black dark:text-white">
    <h2 className="card-title m-auto">
      {item.title}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p className='text-center'>{item.description}</p>
    <div className="card-actions justify-between px-3">
      <div className="badge badge-outline"> $ {item.price}</div>
      <div className="badge badge-outline hover:text-white hover:bg-pink-500 cursor-pointer">Buy now</div>
    </div>
  </div>
        </div>
    </div>
    </>
  )
}

export default Card