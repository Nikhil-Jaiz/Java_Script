//We have studied in Python that map filter and reduce are higher order function that takes
//function as parameter/arguments 
//For eg we pass lambda function to map reduce and filter in Python
//here there is a concept of Callback/Handler which are also nameless functions
//In JavaScript the concept is same here we will use callback 


const num=[1,2,3,4,5];
// let currVal=0;
let new_num=num.reduce(function(x,y)
{
    return x+y;
})
console.log(new_num);


let new_num2=num.reduce((x,y)=>x-y);
console.log(new_num2);
