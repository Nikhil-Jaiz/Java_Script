//Callback function are function that are passed as argument to other function
//we have learned about higher order function that takes functions as input 
//Callback function can be related to lambda function in which which are anonymous or nameless
//callback function are also anonymous function i.e does not have name
//Callback function are generally passed to for each loop which take callback function as argument'


const arr=[1,2,3,4,5];
//syntax arr.forEach(callback_function)
arr.forEach(function (num)
{
    console.log(num);
})

//the call back function are called once for each item/element  of array

//we can also use arrow functions 


const arr2=["nikhil","neha","sonam","swati","rajat","priyaan"];

arr2.forEach((item)=>
{
    console.log(item);
})

const coding=
{
    language:"JS",
    file_extension:".js"
}

// coding.forEach((item)=>
// {
//     console.log(item.language,item.file_extension);
// });
//cannot use forEach loop on object and cannot use for of loop on object
//for in loop can also be used on object.