// Route Middleware: A function in Express.js that runs before a specific route handler to perform tasks like authentication, validation, or logging.
// It uses next() to pass control to the next middleware or route handler.

import express from 'express';

const app=express();

//middleware
function checkAge(req,resp,next){
    
    if(!req.query.age || req.query.age<18){
        resp.send("Alert!, You are not eligible");
       
    }
    else{
        next();
    }
}
function checkName(req,resp,next){
    if(req.query.name){
        resp.send(`Welcome ${req.query.name}`);
    }
    else{
        next();
    }
}

function checkURL(req,resp,next){

    console.log("You open this url:",req.url);

    next();
}

app.get("/",(req,resp)=>{
    resp.send("<h1>Welcome</h1>");
})
app.get("/home",checkURL,(req,resp)=>{
    resp.send("<h1>Welcome home</h1>");
})
app.get("/product",checkURL,checkAge,checkName,(req,resp)=>{
    resp.send("<h1>Welcome product</h1>");
})
app.get("/contact",(req,resp)=>{
    resp.send("<h1>Welcome contact</h1>");
})

app.listen(3200);