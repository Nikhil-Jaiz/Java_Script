// we have seen that we cannot iterate object using for of loop 
// hence to iterate object we use for in loop
// In C++,Python in loop gives the value 
// But in Python we get the index or key


const arr1=[1,2,3,4,5];
const JSuser=
{
   Instructor:"Hitesh Bhai",
   price:2000
}


for(const key in JSuser)
{
    console.log(`The key of object is ${key} and the value is ${JSuser[key]}`);
}

//key in case of array is index

for(const i in arr1)
{
    console.log(`The index i.e key of array is${i} and the value at each key or index is ${arr1[i]}`);
}