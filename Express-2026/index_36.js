import express from 'express';

const app=express();

app.set('view engine','ejs')

app.get("/",(req,resp)=>{
     resp.render('home',{name:'Nilesh',chanel:'Classic',age:20});
});

app.listen(3200);