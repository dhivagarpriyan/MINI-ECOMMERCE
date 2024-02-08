import {Router, Route,Routes} from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ProductDetails from "./pages/productDetails"
import { useState } from "react"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import CartPage from "./pages/CartPage"


function App() {
   const[cartItems,setCartItems] = useState([]);

  return (
    <div>
      
      <ToastContainer theme="dark" position="top-center"/>
         <Navbar cartItems={cartItems} />
      
    
      <Routes>
         <Route  path="/" element={<Home />}/>
         <Route  path="/search" element={<Home />}/>
         <Route  path="/product/:id" element={<ProductDetails
            cartItems = {cartItems}
            setCartItems = {setCartItems}
           
         />}/>
         <Route path="/cart" element={<CartPage
             cartItems = {cartItems}
             setCartItems = {setCartItems}
         />}/>

         </Routes>
      
        <Footer/>
      
    </div>
  )
}

export default App
