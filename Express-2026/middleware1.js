// we use application middleware to check the age and ip of system

import express from 'express';

const app = express();

// function ageCheck(req,resp,next){

//     if(!req.query.age || req.query.age < 18){

//         console.log(req.query.age);

//         resp.send("Alert, You cannot access this page");
//     }
//     else{
        
//         next();
//     }
// }

// app.use(ageCheck);

function ipCheck(req,resp,next){
    const ip = req.socket.remoteAddress;

    console.log(ip);
    next();
}

app.use(ipCheck);

app.get("",(req,resp)=>{
    resp.send("<h1>This is the route page</h1>")
})


app.get("/home",(req,resp)=>{
    resp.send("<h1>This is the home page</h1>")
})


app.get("/login",(req,resp)=>{
    resp.send("<h1>This is the login page</h1>")
})

app.listen(3200);