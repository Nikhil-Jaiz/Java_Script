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
    user_email:"nikhiljaiseal20@gmail.com"

}

let user2=user1;
console.log(user1.user_email,user2.user_email);
// user1.email=
user1.user_email="nikhiljaiz21@gmail.com";
console.log(user2.user_email,user1.user_email);