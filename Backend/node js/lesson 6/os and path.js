
//os
const os = require('os');
console.log(os.userInfo());
console.log(os.homedir())
console.log(os.hostname())
console.log(os.totalmem())
console.log(os.freemem())

const {totalmem, freemem} = require('os');
console.log(os.freemem())

console.log(__dirname)
console.log(__filename)

//path

const path = require('path')
console.log(path)
const extentionName = path.extname('index.js')
console.log(extentionName)

const joinName = path.join(__dirname + "/../viwes")
console.log(joinName)