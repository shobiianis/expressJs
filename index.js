const express=require("express");
const path=require("path");

const app=express();
const pathForIndexFile=path.join(__dirname,"public");

//app.use(express.static(pathForIndexFile)); if we want to remove extension so this command is not used
app.get("/about",(req,res)=>{
res.sendFile(`${pathForIndexFile}/about.html`)

})

// ------------------This following code will be for if search bar has name other than listed page----
app.get("*",(req,res)=>{
    res.sendFile(`${pathForIndexFile}/nopage.html`)
    
    })
app.listen(8001);
