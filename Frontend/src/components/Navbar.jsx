import React from 'react'
import logo from "../assets/images/logo.png"
import Search from './Search'
import { Link } from 'react-router-dom'

const Navbar = ({cartItems}) => {
  return (
    <div className=' w-full py-4 px-2 bg-[#343a40]'>
        <div className='max-w-[1440px] lg:mx-8 mx-4'>
            <div className=' flex justify-between items-center gap-2'>
               <Link to="/">
                   <img  src={logo} width={150}/>

               </Link>
               
                <div className='flex justify-between items-center bg-gray-200  rounded-md '>
                   <Search/>
                   
                 </div>

                 <Link to={"/cart"} className=' bg-gray-200  rounded flex items-center gap-1 ' >
                    
                      <h1 className='font-bold text-sm'>CART</h1>
                      <p className=' bg-orange-400 h-full font-semibold px-2 rounded'>{cartItems.length}</p>
                    
                     
                 </Link>

            </div>

        </div>
    </div>
  )
}

export default Navbar