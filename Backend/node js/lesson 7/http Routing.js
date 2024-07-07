const http = require('http')
const fs = require('fs')
const port = 5500;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) =>{
//    console.log(req.url)
    // res.end("Welcome to server");

    if(req.url === "/"){
    fs.readFile("./views/index.html", (err, data) => {
        res.writeHead(200, {"content-type": "text/html"});
        res.write(data);
        res.end();
      });
    }
    else if(req.url === "/about"){
    fs.readFile("./views/about.html", (err, data) => {
        res.writeHead(200, {"content-type": "text/html"});
        res.write(data);
        res.end();
        });
    }
   else if(req.url === "/contract"){
    fs.readFile("./views/contract.html", (err, data) => {
        res.writeHead(200, {"content-type": "text/html"});
        res.write(data);
        res.end();
        });
    }
    else{
        res.writeHead(404, {"content-type": "text/plain"});
        res.end("404 not found");
    }
});
server.listen(port, hostName, ()=>{
    console.log(`server is running at http://${hostName}:${port}`);
});
