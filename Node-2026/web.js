const http = require("http");
const fs = require("fs");
const path = require("path");

const contentTypes = {
    ".html": "text/html",
    ".css": "text/css"
};

http.createServer((request, response) => {
    const requestedPath = request.url === "/"
        ? "/html/index.html"
        : request.url.endsWith(".html")
            ? "/html" + request.url
            : request.url;
    const filePath = path.join(__dirname, requestedPath);
    const extension = path.extname(filePath);

    if (!contentTypes[extension]) {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("Page not found");
        return;
    }

    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.end("Page not found");
            return;
        }

        response.writeHead(200, { "Content-Type": contentTypes[extension] });
        response.end(file);
    });
}).listen(3200, () => {
    console.log("Website running at http://localhost:3200");
});