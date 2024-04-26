//forEach loop can only be applied to array
//ForEach takes callback function as argument

const arr=[1,2,3,4,5];
arr.forEach((element) => {
    console.log(element);
});
arr.forEach((element,index,arr) => {
    console.log(index,element,arr);
});


const coding=
[
{
    language:"JS",
    file_extension:".js"
},
{
    language:"CPP",
    file_extension:".cpp"
},
{
    language:"Python",
    file_extension:".py"
}
]
coding.forEach((item)=>
{
    console.log(item.language,item.file_extension);
})


//Important note is that forEach is Array method.

// The forEach() method calls a function for each element in an array.