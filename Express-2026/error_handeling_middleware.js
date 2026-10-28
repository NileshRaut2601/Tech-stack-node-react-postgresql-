
// lecture 35

import express from 'express';

const app = express();

app.get('/',(req,resp)=>{
    resp.send("Home page");
})

app.get('/about',(req,resp)=>{
    resp.send1("About page"); // send1 will create error
});


// middle ware 
function errorhandel(err,req,resp,next){
    resp.status(500 || err.status).send("Try after some time");
    next();
}

app.use(errorhandel);

app.listen(3200);