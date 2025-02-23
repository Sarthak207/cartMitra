//const req = require("express/lib/request");
const express= require('express');

const cors = require('cors');
//const e = require("express");
const app= express();
app.use(express.json()); 
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Welcome to CartMitra');
});

app.get('/api/products',(req,res)=>{
    res.send('List of products');
});

const port= process.env.PORT || 5000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));
//app.listen(5000,console.log("Server is running on port 5000"));