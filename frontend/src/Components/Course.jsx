import React from 'react'
import List from "../../public/List.json"
import Cards from './Cards'

function Course() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
        <h1 className='text-2xl font-semibold md:text-4xl'>were delighted to have you <span className='text-pink-500'>here :)</span></h1>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
    {
        List.map((item)=>(
            <Cards key={item.id} item={item}/>
        ))
        }
        
    </div>
   </div>
   </>
  )
}

export default Course
