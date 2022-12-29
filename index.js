const express=require("express");
const path=require("path");

const app=express();
const pathForIndexFile=path.join(__dirname,"public");

app.use(express.static(pathForIndexFile));
app.listen(8001);
