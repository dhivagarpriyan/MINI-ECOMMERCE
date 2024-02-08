import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {toast} from "react-toastify"

const ProductDetails = ({cartItems,setCartItems}) => {
    const [products,setProducts]=useState(null);
    const{id}=useParams();
    useEffect(()=>{
         fetch(`http://localhost:3000/products/${id}`)
        .then((res)=>res.json())
        .then((data)=>{

            setProducts(data.Product)
            console.log(data.Product)
        }).catch((error)=>{
            console.log(error);
        })
        
    },[])

    const [qty, setQty] = useState(1);
        // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
       
       if(products.stock == 0 ){
        return setQty(qty+0)
       }

        
        if(products.stock == qty ){
         return  setQty(qty + 0)
        }
        setQty(qty + 1);
    };
     
    const handleClick2 = () => {
        // Counter state is decremented
        setQty(qty - 1);
        if( qty == 1){
            setQty(qty-0);
        }
    };

    const handleCart = async () =>{
       const itemExist = await cartItems.find((item)=>item.products._id == products._id)
       if(!itemExist){
        const newItem = {products , qty}
         setCartItems((state)=>[...state,newItem])
         toast.success("ADDED TO CART SUCCESSFULLY")
        console.log(cartItems)
       }
}  

  return (
    <>
      {products &&
       <div className='w-full'>
        <div className=' max-w-[1440px] mx-16'>
            <h1 className=' text-center text-black my-4 text-3xl font-bold'>PRODUCT DETAIL</h1>
         <div className=' w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-2'>
            
        
                   <div className=' flex justify-center items-center mx-auto'>
                     {<img src={products.images[0].image} width={500} height={500} alt="images" 
                       className=' object-cover object-center'
                     /> }
                   </div> 
                   <div className=' flex flex-col justify-center '>
                        <h1 className=' text-2xl font-bold'>{products.name}</h1>
                        <h1 className=' text-start mb-4'>{products.category}</h1>
                        <hr className=' border-1 border-black opacity-30'></hr>
                        <div className=" flex text-orange-400 my-1 py-2" >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>
                        
                       </div>
                       <hr className=' border-1 border-black opacity-30'></hr>
                       <h1 className=' mt-2 font-bold text-xl'>${products.price}</h1>
                       <div className=' mt-2 flex items-center gap-2'>
                          <div>
                            <button className='px-2 rounded bg-black text-white' onClick={handleClick2}>
                                -
                            </button>
                            <input value={qty} 
                              onChange={(e)=>setQty(e.target.value)}
                             className=' w-8 text-center'
                            />
                            <button className='px-2 rounded bg-black text-white' onClick={handleClick1}>
                                +
                            </button>
                          </div>
                          <div>
                             <button onClick={handleCart} disabled={products.stock == 0} className=' bg-orange-400 px-2 py-1 rounded text-white font-bold'>
                                ADD TO CART
                             </button>
                          </div>
                       </div>
                       <hr className=' border-1 border-black opacity-30 mt-4'></hr>
                       <h1 className=' font-bold my-2'>Status : <span className=' font-medium text-green-700'>IN STOCK</span></h1>
                       <hr className=' border-1 border-black opacity-30'></hr>
                       <h1 className=' font-bold my-2'>
                        DESCRIPTION:
                        <br></br>
                        <span className='font-medium'>{products.description}</span>
                       </h1>
                       <hr className=' border-1 border-black opacity-30'></hr>
                       <h1 className='font-bold my-2'>
                        SOLD BY : <span className='font-medium'>{products.seller}</span>
                       </h1>
                   </div>
                
    
                
            
            

         </div>

        </div>

    </div>
      }
 </>

  )
}

export default ProductDetails