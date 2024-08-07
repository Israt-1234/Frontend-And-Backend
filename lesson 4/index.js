const express = require("express");
const app = express();

app.get("/products/:id([0-9]+)",(req, res) =>{
    res.send(`<h2> ID = ${req.params.id}</h2>`);
});

app.get("/products/:title([A-Za-z]{3})",(req, res) =>{
    res.send(`<h2> title = ${req.params.id}</h2>`);
});

app.use("*", (req, res) =>{
    res.status(404).send({
        message : 'Not a Valid route'
    })
})
app.listen(3000, () => {
    console.log("server is running at http://localhot:3000");
})
