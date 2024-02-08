const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const products = require("./Routes/Product");
const orders = require("./Routes/Order");
const mongoose= require("mongoose");
require("dotenv").config();
const cors = require("cors")


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MONGODB CONNECTED SUCCESSFULLY")
})



app.get("/test",(req,res)=>{
    res.json("tested")
})
app.use(cors())
app.use(express.json());
app.use(products);
app.use(orders);

app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`)
})



//MHddOhoMlsE9Lw06