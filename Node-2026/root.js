const http=require('http');
const userForm=require("./userForm");
const userData=require("./userData");

http.createServer((req,resp)=>
{
    resp.setHeader('Content-Type',"text/html");
    if(req.url=="/"){
    userForm(req,resp);
    resp.end();
    }
    else{
        if(req.url=="/submit"){
            userData(req,resp);
            
        }
    }
}
).listen(3200);