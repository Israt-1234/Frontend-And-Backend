
const fs = require('fs')
                                                            //create and write file using Asynchronous method
fs.writeFile("demo1.txt" , "I am Israt jahan", (err)=>{     
    if(err)
        console.log(err)
    else
    console.log("Successful")
})
                                                //update
fs.appendFile("demo1.txt", ". hello israt", (err) =>{
    if(err)
        console.log(err)
    else
    console.log("Successful")
})

fs.readFile("demo1.txt", 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data)
    }
})

fs.rename("demo1.txt", 'demo2.txt', (err)=>{           //const result = fs.rename
    if(err){
        console.log(err);
    }else{
        console.log("successfully renamed")
    }
})

var result = fs.writeFileSync("demo1.txt", "My name is Anisul Islam");
    if(result){
        console.log(result);
    }else{
        console.log("Successful")
    }

fs.unlink('demo2.txt', (result)=>{
    if(result){
        console.log("successfully deleted");
    }else{
        console.log("successfully not deleted")
    }
})


fs.exists('demo2.txt', (result)=>{
    if(result){
        console.log("found");
    }else{
        console.log("not found")
    }
})

