// Data Type conversion or typecasting is defined as converting the data type of one variable to other data type.  
// Typecasting are of two types 
// 1-Implicit typecasting -Done By compiler /interpreter for eg 2 + 3.5
// 2-Explicit typecasting  -Done by User  int to string or string to number like this

let score =33;
console.log(typeof(score));


let valueInNumber=Number(score);
console.log(valueInNumber)



let score2="33abc";
let value2=Number(score2);
//Although we have converted score2 to number did it is not a NaN
console.log(typeof(value2));
console.log(value2);
//Also note that to use explicit typecasting we use pascal case where the staring letter is
// capitalized


let x="22";
console.log(x,typeof(x));

let y=Number(x);
console.log(y,typeof(y));


let w=39;
console.log(w,typeof(w));
let z=String(w);
console.log(z,typeof(z));
