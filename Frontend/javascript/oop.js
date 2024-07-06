const user = {
    username :"hitesh",
    logincount: 8,
    singedin: true,
    getuserdetails: function(){
        console.log("got user details from databse");
        consol.log(`username : ${this.username}`);
    }
}

console.log(user.username);

// const promise = new Promise()
// const data = new Date()

function User(username, logincount, isLogged){
    this.username = username;
    this.logincount = logincount;
    this.isLogged = isLogged;


}

const userName = User("israt", 23, 345);
const userName1 = User("israt", 23, false);

console.log(userName)
