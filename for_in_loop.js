// we have seen that we cannot iterate object using for of loop 
// hence to iterate object we use for in loop
// In C++,Python in loop gives the value 
// But in Python we get the index or key
//For in loop are generally used for object

const arr1=[1,2,3,4,5];
const JSuser=
{
   Instructor:"Hitesh Bhai",
   price:2000
}

//we can access object using JSuser.price or Jsuser[price]
// for(const key in JSuser)
// {
//     console.log(`The key of object is ${key} and the value is ${JSuser[key]}`);
// }

// //key in case of array is index

// for(const i in arr1)
// {
//     console.log(`The index i.e key of array is${i} and the value at each key or index is ${arr1[i]}`);
// }

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

for (const key in arr3)
{
    console.log(key, arr3[key].name);
    //for 2nd object name key is not available so it will throw undefined.
}
//here key will index and arr3[key] will return an object