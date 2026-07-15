
require('dotenv').config()
const express = require('express');
const mongodbConnect = require('./database');
const Product = require('./model/productModel');

const app = express();
app.use(express.json())

mongodbConnect()

// get all data 
app.get("/product", async (req,res)=>{
    const product = await Product.find()
    res.json({
        message: "Product fetched successfully.",
        data: product
    })
})

// get single data 
app.get("/product/:id", async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    
    res.json({
        message: "Product fetched successfully.",
        data: product
    })
})

app.post('/product', async (req,res)=> {
    const { name, price, description, image } = req.body

    const proudct = await Product.create({name, price, description, image} )

    res.json({
        message: "Product created successfully.",
        data: proudct
    })
})



app.listen( process.env.PORT, ()=> {
    console.log("Server started on port 3000")
})
