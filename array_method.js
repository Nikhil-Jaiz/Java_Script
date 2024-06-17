// method-1 of declaration 
let arr=[1,2,3,4,5];
console.log(arr);
//method-2 of Declaration
let arr2=new Array(10,20,30,40,50);
console.log(arr2)


console.log(arr[2],arr2[3]);


//array methods in JavaScript
let array=[1,11,111,1111];
array.push(11111);
console.log(array)
array.pop();
console.log(array)
array.shift();
console.log(array)
array.unshift(0);
console.log(array)

console.log(array.includes(12));
console.log(array.indexOf(111));


//different between splice and slice
// slice used to get portion of string or array and the last index or range is not included 
//also the original array does not change
// splice used to get portion of string or array and the last index or range is included 
//also the original array does changes


let A=[1,2,5,7,8,20];
console.log(A.splice(1,4));
console.log(A);

let B=[11,23,9,16,14];
console.log(B.splice(2,4));
console.log(B);