
//cannot use const keyword to declare a variable in for loop
//variable declared using const cannot be re declared and reassigned

for(let i=0;i<10;i++) console.log(i + " ");

// for(let i=0;i<5;i++)
// {
//     console.log(`${i}`);
//     for(let j=0;j<5;j++)
//     {
//         console.log(`The value of each iteration corresponding to outer loop is ${i} is ${j}`);
//     }
    
// }

const arr=["nikhil","neha","rajat","priyaan"];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}


//Important keyword break and continue in For Loop
//break keyword or statement is used to move out of the loop
//continue statement is used to move to next iteration of loop

for(let i=0;i<6;i++) 
{
    if(i==4)
    {
        console.log("moving out of the loop and the loop ends here");
        break;
    }
    console.log(i);
}
for(let i=0;i<6;i++) 
{
    if(i==4)
    {
        console.log(`Skippping a particular iteration of loop when value is ${i}`);
        break;
    }
    console.log(i);
}