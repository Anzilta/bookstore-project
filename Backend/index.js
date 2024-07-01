var express=require('express')
require('./connection')
var user=require('./models/user')
var app =express()
var cors=require("cors")

// middleware
app.use(express.json())
app.use(cors())

// post api
app.post('/',async(req,res)=>{
    try {
        await user(req.body).save()
        res.send("data sent")
        
    } catch (error) {
        res.send(error)
        
    }


})



// port
app.listen(3000,()=>{
    console.log("server is running")
})