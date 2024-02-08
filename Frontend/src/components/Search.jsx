import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [keyword, setKeyword]=useState("");
    const navigate = useNavigate();
    const searchHandler = ()=>{
        navigate("/search?keyword="+keyword);
    }
  return (
    <>
         <input  
            type="text" 
            placeholder='Enter Product Name...'
            className='text-[12px] md:text-[16px] px-1  md:p-1 rounded-md focus:outline-none w-[120px] sm:w-[150px] md:w-[400px] lg:w-[500px]'
            onChange={(e)=>setKeyword(e.target.value)}
            onBlur={searchHandler}
         />
                
        <button 
          onClick={searchHandler}
        className=' bg-orange-400 h-full px-1 md:p-1 rounded-md text-white'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </button>
    </>
  )
}

export default Search