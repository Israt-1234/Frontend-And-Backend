 const express = require('express')
 const router = express.Router()

router.post("/",(req, res)=>{
    res.send("iam a post request at home route");
    res.end()
})
router.put("/register", (req, res)=>{
    res.send("i am a get request at home route")
    res.end()
});
router.delete("/login",(req, res)=>{
    res.send("iam a post request at home route");
    res.end()
})

module.exports = router