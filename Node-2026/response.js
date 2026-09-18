const http=require('http');

http.createServer((req,resp)=>{
    resp.setHeader('Content-Type',"text/html");
    resp.write(`
        <head>
          <title>Response site</title>
        </head>
        <body>
        <h2>Hello World</h2>
        <h3>${new Date()}</h3>
        </body>
        
        `
        
    
    
    );
    resp.end();
}).listen(4801);