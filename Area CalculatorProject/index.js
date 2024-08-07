const express = require('express');
const bodyparse = require('body-parser')
const app = express();
const port = 3000;
//use body-parser

app.use(bodyparse.urlencoded({extended: false}));
app.use(bodyparse.json());

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/circle", (req, res)=>{
    res.sendFile(__dirname + "/circle.html")
})
app.get("/triangle", (req, res)=>{
    res.sendFile(__dirname + "/triangle.html")
})

app.post("/triangle", (req, res)=>{
      const height = req.body.height
      const base  = req.body.base
      const area = 0.5*base*height;
      res.send(`<h2> Area of Triangle is : ${area}</h2>`);
});

app.post("/circle", (req, res)=>{
    const height = req.body.radius
    const area = Math.PI*height*height;
    res.send(`<h2>Area of Circle is : ${area}</h2>`)
})

app.listen(port, ()=>{
    console.log(`sever is running at http://localhost:${port}`);
})