let age=22;
if(age>22)
{
    let a=10;
    const b=20;
    var c=30;

}
// console.log(a);  //cannot print a as variable a has local scope



var d=15;
let e=25;
const f=35;

if(age>20)
{
    let e=40;
    const f=60;
    var d=50;
    console.log(e)
    console.log(f)
    console.log(d)
}
console.log(e)
    console.log(f)
    console.log(d)   //as the d e f declared inside if block has local scope 
                   //there when we come out of if statement then the global  d e f should be printed
                   //but var has this demerit and because of this we don't use var
//variable declared inside a curly braces has it scope till there only.