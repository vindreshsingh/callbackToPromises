const express=require("express");
const PORT= 7000;
const app=express();


app.listen(PORT,(err)=>
{
    if(err){
        console.log("error")
    }
    console.log(`Server start on port ${PORT}`)
})
;