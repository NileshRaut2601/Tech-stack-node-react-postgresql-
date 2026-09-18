const http=require("http");

var obj=[
    {
        "name":"Nilesh",
        "age":19,
        "gmail":"nil@123",

    },
    {
        "name":"Aryajeet",
        "age":19,
        "gmail":"arya@123",

    },
    {
        "name":"Vishvajeet",
        "age":19,
        "gmail":"Vishva@123",

    }
]

http.createServer((req,resp)=>{
    resp.setHeader('Content-Type','application/json');
    resp.write(JSON.stringify(obj));
    resp.end();
}).listen(4900)