const express = require("express");
const router = express.Router();
const orderModel = require("../Models/orderModel")
const productModel = require("../Models/productModel")

router.post("/orders",(req,res,next)=>{
   
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,item)=>(acc + item.products.price * item.qty),0)).toFixed(2);
    const status = "pending";

    //updating product stock
    cartItems.forEach(async(item) => {
       const products = await productModel.findById(item.products._id)
        products.stock = products.stock - item.qty
       await products.save()
    });
    
  const Order = orderModel.create({cartItems,amount,status})
    res.json({
        success:true,
        Order
    })
}
)

module.exports = router;