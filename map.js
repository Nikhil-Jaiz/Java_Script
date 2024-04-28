//We have studied in Python that map filter and reduce are higher order function that takes
//function as parameter/arguments 
//For eg we pass lambda function to map reduce and filter in Python
//here there is a concept of Callback/Handler which are also nameless functions
//In JavaScript the concept is same here we will use callback 


const nums=[1,2,3,4,5,6,7];
let new_nums=nums.map((item)=>item*10);
console.log(new_nums);

//concept of chaining  
//we can use multiple map and filter reduce with map for eg

const my_nums=[2,3,5,7,11];
let new_mynums=my_nums.map((value)=>value *10)   //this will return an array or list
                   .map((num)=>num+5);

console.log(new_mynums);

//apply n map and filter
let new_mynums2=my_nums.map((value)=>value *10)   //this will return an array or list
.map((num)=>num+5)
.map((element)=>element/5)
.filter((x)=>x>20);
console.log(new_mynums2);
 