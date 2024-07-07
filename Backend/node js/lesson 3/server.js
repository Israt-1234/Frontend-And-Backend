const http = require('http')
const port = 3000
const hostname = '127.0.0.1'

const server = http.createServer((req, rees) =>{
    res.end("hello israt")
})

server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`);
})