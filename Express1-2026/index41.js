import express from 'express';  
import userData from './Data/user.json' with {type:'json'}
const app = express();
const data=userData;

app.get("/",(req,resp)=>{
    resp.send(data);
})

app.get("/user/:id",(req,resp)=>{
   
    let filterdata = userData.filter((user)=>user.id==req.params.id)
    resp.send(filterdata);
})


app.listen(3200);