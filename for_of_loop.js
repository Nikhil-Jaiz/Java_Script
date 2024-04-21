//Higher order loops in JS are for in, for of ,for each


const arr1=[1,2,3,4,5];
const arr2=["nikhil","jaiswal","neha","jaiswal"];
const arr3=
[
    {
        name:"NIkhil",
        height:"5 10"
    },
    {
        course :"JS Tutorial",
        price:1999
    }
]
for (const i of arr1)
{
    console.log(i);
}
for (const i of arr2)
{
    console.log(i);

    for (const i of arr3)
{
    console.log(i);
}
}
const JSuser=
{
   Instructor:"Hitesh Bhai",
   price:2000
}
// for(const i of JSuser)
// {
//     console.group(i);
// }
// we cannot iterate object using for of loop -disadvantage of For-OF loop 