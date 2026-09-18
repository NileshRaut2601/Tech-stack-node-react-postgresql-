
const fs = require('fs');
const http = require('http');

http.createServer((req, resp) => {


    const file=req.url

    // to remove the /favicorn.ico from url
    if (req.url === '/favicon.ico') {
    resp.writeHead(204);
    resp.end();
    return;
}
    console.log('html'+file);
    // ================= Header File========
    let collectHeader;
    collectHeader=fs.readFileSync('html/header.html',"utf-8");
    

    //=======================
    if (req.url == '/') {

        fs.readFile("html/home.html", 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { 'content-type': "text/plain" });
                resp.end("Internal Server Error");
                return false;
            }
            resp.writeHead(200, { 'content-type': 'text/html' })
            resp.write(collectHeader+""+data)
            resp.end();
        })
    }

    else if (req.url == '/style.css' || req.url == '/css/style.css') {
        fs.readFile('css/style.css', 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { 'content-type': 'text/plain' })
                resp.end('css not found error');
                return;
            }
            resp.writeHead(200, { "content-type": 'text/css' });
            resp.end(data);
        });
    }
    else if (req.url!="/") {
        fs.readFile('html'+file+".html", 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { "content-type": "text/plain" });
                resp.end('Internal server error');
                return;
            }
            resp.writeHead(200, { "content-type": "text/html" });
            resp.write(collectHeader + "" + data);
            resp.end();
        });
    }
    else {
        resp.writeHead(404, { "content-type": "text/plain" });
        resp.end("Page Not Found");
    }
}).listen(3200)