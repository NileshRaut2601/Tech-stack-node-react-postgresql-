// lecture 37

import express, { urlencoded } from 'express';

const app = express();

app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')    // ejs is used to dyanamic nature to html

app.get("",(req,resp)=>
{
    resp.render('Add-User');
})

app.post('/submit',(req,resp)=>{
    console.log(req.body)

    resp.render('Submit-User',req.body);
})

app.listen(3200);