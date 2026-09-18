const http=require("http");
const arg=process.argv;
const port=arg[2];

http.createServer((req,resp)=>{
    resp.write("<h1>Welcome to Page</h1>");
    resp.write(port);
    resp.end();
}).listen(port)