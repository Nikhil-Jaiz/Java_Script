const course={
  name:"JS Tutorial",
  price:1999,
  Teacher:"Hitesh"
}

console.log(course.Instructor);

// Instead of writing this syntax multiple time we can use another short syntax 
const {Teacher}=course   //  const {konsi value lene hai} =values kaha se lena hai
const {Teacher:ASinst}=course   //  const {konsi value lene hai} =values kaha se lena hai


console.log(Teacher);
console.log(ASinst);

const {name,price,Instructor}=course;
console.log(name,price,Teacher);
//object de-structuring are done through curly braces {}



//API -Stands for Application Programming Interface
//In short API means apna kaam dusre ke upar talna
//Like In Restaurant we need food then we simply order without bothering about other complexity


// JSON-JavaScript Object Notation 
//API are written generally in JSON format
[
    {
        "course": "JS Tutorial",
        "price": 1999,
        "Instructor": "Chai Aur JS"
    },
    {
        "name": "Nikhil",
        "lastLoggedIn": true,
        "email": "xyz@gmail.com"
    }
]
