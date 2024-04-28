const num=[1,2,3,4,5];
// let currVal=0;
let new_num=num.reduce(function(x,y)
{
    return x+y;
})
console.log(new_num);


let new_num2=num.reduce((x,y)=>x-y);
console.log(new_num2);
