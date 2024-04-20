// JavaScript typechecking does not take place that means if we pass string 
// to the function which need number then thereis no checking
// This feature is avaible in TypeScript


function HandleObject(course)
{
    console.log(`The name of Course is ${course.name} and the price is ${course.price}
    and if we write prices or anything other key which is not available in our object 
    then we will get ${course.prices}`);

}

const course=
{
    name:"JS Tutorial",
    price :1999,
    Instructor:"Hitesh"
}
HandleObject(course);

//instead of making object or array variable we can also pass object and array directly.


function HandleArr(ar)
{
    console.log(ar[2]);
}

HandleArr([111,2,9,14]);