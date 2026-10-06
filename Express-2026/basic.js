// const express=require("express");
import express from 'express';

import home from "./pages/home.js";
import {contact} from "./pages/home.js";

const app=express();

app.get("/",(req,resp)=>{
    resp.send(home())
});

app.get("/home",(req,resp)=>{
    resp.send(home())
})
app.get("/contact",(req,resp)=>{
    resp.send(contact())
})

app.listen(3200);