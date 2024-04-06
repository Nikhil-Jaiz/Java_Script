//there are three methods to declare a variable in java script
//these are var let const

const id=12345679;
let custName="Nikhil";
var accountName="UBI";
console.table([id,accountName]);
// id=012345; variable decalred using const cannot be redeclare and cannot be reassigned.
console.log(id);
custName="Jaiswall";
console.log(custName);
//variable decared using let can be reassigned but cannot be redeclared.

// In JS we don't use var keyword to declare variable as there is concept of scoping in that
// let and const are the latest keyword used to declare variable inECMA standard.
// console.log("The value of a is " + 9 +" value of b is ",9,4);
// let a=15,b=20;
// console.log(a,b);