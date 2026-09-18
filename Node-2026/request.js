const http = require("http");

http.createServer((req,resp)=>{
    if(req.url=="/"){
        resp.write("<h1>Welcome Page<h1>");
    }
    
    if(req.url=="/login"){
        resp.write("<h1>Login Page<h1>");
    }
    if(req.url=="/home"){
        resp.write("<h1>Home Page<h1>");
    }
    if(req.url=="/other"){
        resp.write("<h1>Other Page<h1>");
    }
    resp.end();
}).listen(2000);