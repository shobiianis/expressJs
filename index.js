const express=require("express");
const app=express();

app.get("/home",(req,res)=>{

res.send("this is home page")
})

app.get("/",(req,res)=>{
   res.send("This is index page")
})

app.get("help",(req,res)=>{
    res.send("This is help page")
 })

app.listen(12000)