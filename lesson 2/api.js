const express = require('express')
// const router = express.Router();
const app = express();

const userrouter = require("./router/users.route")
app.use("/api/user",userrouter);

app.use("/register", (req, res)=>{
    res.send("hi i am register page")
})
app.use("/login", (req, res)=>{
    res.send("hi i am login page")
})
app.res("/coki",(req, res)=>{
    res.cookie("name","israt");
    res.cookie("age", "32");
    res.clearcookie("name");
    res.append("id", "12333");
    res.end();
})
app.use("/", (req, res)=>{
    res.send("i am a get request at home route")
    res.end()
});

app.use("/register", (req, res)=>{
    // res.status(200).json({
    //     "name":"israt jahan",
    //     "message":"iam register",
    //     statuscode :200
    // });
    res.statusCode = 200;
    res.sendFile(__dirname + "/viawes/register.html")
    res.redirect("/login")
})

app.use( (res, req)=>{
    res.send(<h1>404!!!Not Found url</h1>)
})

module.exports = app