// There are two types of Memory Allocation in JS
// 1-static using memory of Stack and dynamic using memory of Heap
let a=10
console.log(a)
let b=a
console.log(b)
b=25
console.log(b,a)
//although we have changed b but a value does not change because In static memory allocation 
// we pass a copy


let user1={
    user_name:"Nikhil Jaiswal",
    user_id:123456,
    user_email:"nikhiljaiz20@gmail.com"

}

let user2=user1;   //object uses concept of heap  that is they access the same memory (call by references)
console.log(user1.user_email,user2.user_email);
// user1.email=
user1.user_email="nikhiljaiz21@gmail.com";   //changes made to obj1 will be seen in object2 due to this concept of heap memory
console.log(user2.user_email,user1.user_email);


//primitive data types like 1-number 2-string 3-boolean 4-NaN 5-Undefined 6-NULL 7-Symbol uses concept of Stack Memory
//Non-Primitive data types like object array and function uses concept of stack memory or deep copy