// array are ordered collection of data items
// if we have not declared data type and size of array means array can have
// items with multiple data type as well as they are resizable

let arr=[3,14,9 ,12 ,5,"string",true];
console.log(arr);


const arr2 =new Array("string","Ans",true,false ,124,92);
console.log(arr2);

//some array method in JS 
arr.push(3);
console.log(arr);
arr2.pop();
console.log(arr2);
let flag=arr.includes(9);
console.log(flag);

const index=arr2.indexOf("Ans");
console.log(index);