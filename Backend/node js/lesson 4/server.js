const http = require('http')
const port  = 3000
const hostname = '127.0.0.1'

const server = http.createServer( (req, res) => {
    res.writeHead(200, {"content-type":"text/html"})
    res.write("<h1>Hello<h1>")
    res.write("<h1>Hello<h1>")
    res.write("<h1>Hello<h1>")
    res.end();
});

server.listen(port, hostname, ()=>{
    console.log(`server is running at http://${hostname}:${port}`)
})