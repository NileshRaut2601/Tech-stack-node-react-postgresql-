const http=require('http');

http.createServer((req,resp)=>{
    resp.write("<h1>Hello World<h1>");
    resp.end("!");
}).listen(4900);


http.createServer((req,resp)=>{
    resp.write("Hello World");
    resp.end("!");
}).listen(4901);