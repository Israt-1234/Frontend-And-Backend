const express = require("express");
const app = express();
const PORT = 3000;

const mymiddleware =(req, res, next)=>{
console.log("middle waire function");
req.currentTime = new Date(Date.now());
next();
}
// app.use(mymiddleware);
// app.use((req,res,next)=>{
    // res.send("404 Not Found")
// });
app.get("/", mymiddleware, (req, res)=>{
    console.log("i am home "+req.currentTime)
    res.send("<h2> hello this is home route</h2>");
})

app.get("/about", mymiddleware, (req, res)=>{
    console.log("i am about "+req.currentTime)
    res.send("<h2> hello this is about route</h2>");
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})


//npm init -y
//npm install nodemon express
//npm start