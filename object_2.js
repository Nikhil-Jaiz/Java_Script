const obj2=new Object();
const obj3=
{
    name:"Nikhil",
   email:"nikhiljaiswal20@gmail.com",

   

   Fullname: {
    first:"Nikhil",
    lastName:"Jaiswal",
    middle:"kumar",

   }


}
// console.log(obj3.Fullname.middle);


const ob4={1:"Nikhil",2:"Shivam"};
const ob5={3:"Navneet",4:"Ashish"};
const ob6={...ob4,...ob5};
// console.log(ob6);



//Array of object

const nikhil=
[
    {
        id:129,
        email:"nikhiljaiswal20@gmail.com"
    },
    {
      color:"fair",
      height:"5 10"
    }
    
]
// console.log(nikhil[0].email);


console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));

