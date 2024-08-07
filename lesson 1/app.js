const express = require('express')
// const router = express.Router();
const app = express();

app.get("/", (req, res)=>{
    res.send("i am a get request at home route")
    res.end()
});
app.post("/",(req, res)=>{
    res.send("iam a post request at home route");
    res.end()
})
app.put("/register", (req, res)=>{
    res.send("i am a get request at home route")
    res.end()
});
app.delete("/login",(req, res)=>{
    res.send("iam a post request at home route");
    res.end()
})

app.use( (res, req)=>{
    res.send(<h1>404!!!Not Found url</h1>)
})

module.exports = app