import express from 'express';

const app = express();


// Middleware Function 

function checkRouter(req,resp,next){
    console.log(req.url);
    next();
}

// Application Middelware
app.use(checkRouter);

app.get("/",(req,resp)=>{
    resp.send("Hello from route page");
})

app.get("/home",(req,resp)=>{
    resp.send("Hello from home page");
})

app.get("/about",(req,resp)=>{
    resp.send("Hello from about page");
})

app.listen(3200);