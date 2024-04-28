//We have studied in Python that map filter and reduce are higher order function that takes
//function as parameter/arguments 
//For eg we pass lambda function to map reduce and filter in Python
//here there is a concept of Callback/Handler which are also nameless functions
//In JavaScript the concept is same here we will use callback 



let coding =["C++","Python","Java","JS","Ruby","SQL"];
console.log(coding);


let new_arr=coding.forEach((item)=>
{
    return item;
});
console.log(new_arr)
//the output is coming undefined because forEach method does not return anything


let nums=[2,3,7,11,13,17];
// console.log("The first 6 prime number is",nums)


//using filter now
let new_nums=nums.filter((item)=>(item>5));
console.log(new_nums);


//we can do the same thing using forEach but forEach won't return anything.

let new_nums2=[];  //declaring an empty array
let nums2=[2,3,7,29,31,37];
nums2.forEach((item)=>
{
    if(item>5)new_nums2.push(item);
});
console.log(new_nums2);


//Filter method in array of objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //we can apply for each method as well as can use filter method too
  let arr_obj=books.filter((item)=>
{
    return item.genre==="History";
})
console.log(arr_obj);

let arr_obj2=books.filter((obj)=>
{
    return obj.publish>=2000;
})
console.log(arr_obj2);