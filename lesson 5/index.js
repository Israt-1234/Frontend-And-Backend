require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send("Hello i am home route")
})
app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

//npm init -y
//npm install express
//server run -> node index.js
//npm install dotenv