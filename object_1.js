// Objects are Non-Primitive data types in Java Script
//Object are key value pair
//Object occupies memory of Heap
//In JavaScript everything is based on object and there is no concept of pointer
//To access we will use . operator .For eg this.username instead of #this->username (C++)

const JSuser=
{
    name:"Nikhil",
    age:18,
    location:"Ghaziabad",
    email:"nikhiljaiswal20@gmail.com",
    isLoggedIn:false,
    lastLogInDay:["Monday","Tuesday","Wednesday"],
    
}
console.log(JSuser.age);
console.log(JSuser.lastLogInDay[2]);
console.log(JSuser.email);
JSuser.email="nikhil.jaiswal@google.com";
console.log(JSuser.email);
Object.freeze(JSuser.email);
JSuser.email="nikhil.jaiswal@amazon.com";
console.log(JSuser.email);
JSuser.greeting=function()
{
    console.log("Hello JS user")
}

//concept of string interpulation
console.log("Hello Nikhil JAISWAL");

console.log(`Hello JS user,${this.email}`); 
// this is related to current object 
//in C++ this is a pointer