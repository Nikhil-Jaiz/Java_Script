// Arrow function in another way of representation in ECMA 
//method-1
const sum=function(a,b)
{
    return a+b;
}
let a=15,b=26;
let result=sum(a,b);
console.log(result);

// Now the same function can now be written with the help of arrow functions
//method-2
const diff=(c,d)=>
{
    return c-d;
}
let c=24 , d=10;
let ans=diff(c,d);
console.log(ans);
// method -3
const pro=(e,f)=> e*f;  // or (e*f)
let sol=pro(10,5);
console.log(sol);