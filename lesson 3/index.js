const express = require('express')
const app = express()
const port = 3003
// quary perameter
/*
app.get("/",(req, res)=>{
    const id = req.query.id;
    const {id1, name} = req.query;
    // res.send("i am home route");
    res.send(`student id is : ${id}`);
})

//route perametar
app.get("/userid/:id/userage/:age",(req, res)=>{
   const id = req.params.id;
   const age = req.params.age;

   res.send(`student id is ${id}, and age is ${age}`)
})

app.get("/",(req, res)=>{
    const id = req.header("id");
    const age = req.header("name");
    
    res.send(`student id is ${id}, and age is ${age}`)
 })

 */
const bodyparse = require("body-parse")
app.use(bodyparse.urlencoded({extended: false}));
app.use(bodyparse.json());

app.get("/register",(req, res)=>{
    res.sendFile(__dirname+"index.html")
})
app.post("/register",(req, res)=>{
  const name = req.body.FULLNAME;
  res.send(`welcome${name}`)

})
 
app.listen(port, ()=>{
    console.log(`server is running at http://localhot: ${port}`);
});