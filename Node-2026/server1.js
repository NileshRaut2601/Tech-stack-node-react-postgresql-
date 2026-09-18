const http=require('http');

http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.write("<h2>Hello World!</h2>");
 
    resp.write("key:value");
    resp.end()
}).listen(4900);