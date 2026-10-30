import express from 'express';

const app = express();

app.get("/",(req,resp)=>{
    const user = ['anil','suraj','nikhil','aditya'];

    let data=`<ul>`;
    for(let i=0;i<user.length;i++){
        console.log(user[i]);
        data+=`<li> <a href="user/${user[i]}">${user[i]}</a></li>`
        }
    data+=`</ul>`
    console.log(data);
    resp.send(data)



})

app.get("/user/:name",(req,resp)=>{
     
    resp.send(`Welcome ${req.params.name}.`);

})


app.listen(3200)