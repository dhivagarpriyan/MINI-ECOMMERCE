import React from 'react'
import {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import {MdOutlineDelete} from "react-icons/md"
import axios from 'axios';
const CartPage = ({cartItems,setCartItems}) => {
    const [complete,setComplete] = useState(false);
     console.log(cartItems)
    function increaseQty(item) {
        if (item.products.stock == item.qty) {
            return;
        }
        const updatedItems = cartItems.map((i) => {
            if(i.products._id == item.products._id) {
                i.qty++
            }
            return i;
        })
        setCartItems(updatedItems)
    }

    function decreaseQty(item) {
        if (item.qty > 1) {
            const updatedItems = cartItems.map((i) => {
                if(i.products._id == item.products._id) {
                    i.qty--
                }
                return i;
            })
            setCartItems(updatedItems)
        }
    }

    function deleteItem(item){
        const updatedItems = cartItems.filter((i) => {
            if(i.products._id !== item.products._id) {
              return true;   
            }
            
        })
        setCartItems(updatedItems)
    }

    function HandlePlaceOrder(){
        axios.post("http://localhost:3000/orders",cartItems)
            .then(()=>{setCartItems([]);
                setComplete(true);
                toast.success("Your order has been placed successfully")
            })
    }

  return (
     cartItems.length > 0 ?
    <Fragment>   
      <div className="container container-fluid">
    <h2 className="mt-5 text-center font-bold mb-4">Your Cart: <b>{cartItems.length} items</b></h2>
    <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8">
            {cartItems.map((item) =>
            (<Fragment key={cartItems.qty}>
                <hr />
                <div  className="cart-item">
                    <div className="row flex items-center">
                        <div className="col-4 col-lg-3">
                            <img src={item.products.images[0].image} alt={item.products.name} height={90} width={115} />
                        </div>

                        <div className="col-5 col-lg-3">
                            <Link to={"/product/"+item.products._id} >{item.products.name}</Link>
                        </div>


                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p id="card_item_price">${item.products.price}</p>
                        </div>

                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus" onClick={() => decreaseQty(item)}>-</span>
                                <input type="number" className="form-control count d-inline" value={item.qty} readOnly />

                                <span className="btn btn-primary plus" onClick={() => increaseQty(item)}>+</span>
                            </div>
                        </div>

                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                            <MdOutlineDelete size={25} className='text-red-600' onClick={()=>deleteItem(item)}/>
                        </div>
                     
                    </div>
                </div>
            </Fragment>)
            )}
           <hr />
        </div>

        <div className="col-12 col-lg-3 my-4">
            <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>Subtotal:  <span className="order-summary-values">{cartItems.reduce((acc,item)=> (acc + item.qty), 0)} (Units)</span></p>
                <p>Est. total: <span className="order-summary-values">${Number((cartItems || []).reduce((acc,item)=> (acc + item.products.price * item.qty), 0)).toFixed(2)}</span></p>

                <hr />
                <button onClick={HandlePlaceOrder} id="checkout_btn" className="btn btn-primary btn-block">Place Order</button>
            </div>
        </div>
    </div>
    </div>
   </Fragment> : (!complete ?
   <h2 className=' font-bold text-xl text-center mt-8'>YOUR CART IS EMPTY</h2> 
   :<Fragment>
      <h1 className=' font-bold text-center my-4 text-xl'>ORDER COMPLETED!</h1>
      <p className=' font-semibold text-center text-lg'>Your order has been placed successfully</p>
   </Fragment>)
  )
}
export default CartPage