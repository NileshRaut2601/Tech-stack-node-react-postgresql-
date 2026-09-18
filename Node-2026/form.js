const http=require("http");
const fs=require("fs");
const querystring=require('querystring');

http.createServer((req,resp)=>{
   
    fs.readFile('html/form.html','utf-8',(error,data)=>{
         
        if(error){
            resp.writeHead(500,{'content-type':'text/plain'});
            resp.end("Internal serval error");
            return;
        }
        resp.writeHead(200,{'content-type':'text/html'});
        if(req.url=='/'){
        resp.write(data);
        resp.end();
        }
        else{
            if(req.url=='/submit'){
                let datachunk=[];
                req.on('data',(chunk)=>{
                    datachunk.push(chunk);
                })

                req.on('end',()=>
                {
                    let rawdata=Buffer.concat(datachunk).toString();
                    let readabledata=querystring.parse(rawdata);
                    let datastring="My name is "+readabledata.name+" My email is "+readabledata.email;
                    // fs.writeFileSync("text/"+readabledata.name+".txt",datastring);
                    fs.writeFile("text/"+readabledata.name+".txt",datastring,"utf-8",(err)=>{
                        if(err){
                            resp.end("Internal server error");
                            return false;
                        }else{
                            console.log("File created");
                        }
                    })
                    // console.log("File Created");
                    // resp.writeHead(200,{'content-type':'text/html'});
                    resp.write("<h1>Data Submitted</h1>");
                    

                })
               
            }
        }
    }
    )


}).listen(4900)

// const http = require("http");

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-type':"text/html"})
//     resp.write(`
//         <h1>Login Form</h1>
//         <form action="submit" method="POST">
//         <input type="text" placeholder="Enter your name">
//         <input type="email" placeholder="Enter your email">
//         <button>Submit</button>
//         </form>
//         `)
//     resp.end();
// }).listen(4900)