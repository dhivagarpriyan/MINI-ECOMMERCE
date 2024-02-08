const express = require("express");
const router = express.Router();
const productModel = require("../Models/productModel");

router.get("/products",async(req,res,next)=>{
    const query = req.query.keyword ? {name:{
        $regex:req.query.keyword,
        $options:"i"
    }}:{}
     const Product = await productModel.find(query)
    res.json({
        success:true,
        Product

    })
})

router.get("/products/:id",async(req,res,next)=>{
    try{
        const Product = await productModel.findById(req.params.id)
     res.json({
        success:true,
        Product
    })
    }catch(error){
        res.status(404).json({
            success:false,
            message:"unable to get data with that id"
        })
    }
})

module.exports = router;