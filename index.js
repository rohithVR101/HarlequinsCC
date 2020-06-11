const express=require('express');
const app=express();

app.get("/", function(req,res){
    res.sendFile(__dirname+"/views/pages/index.html");
});

app.listen(8000, function(){
    console.log("Hello");
});