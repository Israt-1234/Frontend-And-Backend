const promises = new Promise(function(resolve, reject) {
    // do an async task
    //db calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is compelete');
        resolve();
    } , 2000)
});

promises.then(function(){           //resolve
     console.log("promise consumed");
})                 



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    } , 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promise1 =  new Promise((resolve, reject) => {
    setTimeout(function(){
       resolve({
        Name : "israt jahan",
        email : "223018312@eastdelta.edu"
       })
    }, 1000)
})

promise1.then(function(user){
    console.log(user);
})



const promise2 = new Promise((resolve, reject) => {
    setTimeout(function(){
     let error = true;
     if(!error){
        resolve({
            unserName : "israt",
            age : 21
        })
     }
     else{
        reject('Error: something went wrong')
     }
    } , 1000)
})

promise2.then((user) => {
       console.log(user);
       return user.unserName;
}).then((unserName)=> {
    console.log(unserName);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise is either resolve or rejected");
})
