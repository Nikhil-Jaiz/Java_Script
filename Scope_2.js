//Here we will understand concept of local and global scope using 
//nested function and if else

function one(name)
{
    let username="Nikhil1";

    function two()
    {
        let website="Youtube";
        console.log("Hello "+name);
        console.log(username);
    }
    // console.log(website);  //website has local scope and can be accessed only in function two
    console.log("Iskee bad function 2 jab call hoga tab hmko hello nik aur username pta chalega abhi tk function 2nd use me nahi hai");
    two();
}

//If we call function one then only it will get executed
//Apart from main function no one get directly executed
one("Nik");
// console.log(username); //phir se local to function wla concept hai ye


if(true)
{
    //note that username declared above was part of function one and cannot accessed outside function one
    let username="Nikhil2";
    if(username=="Nikhil2")
    {
        const username2="nikhil";
        console.log(username);

    }
    // console.log(username2);  //phir se local scope ka dikht aagya
}

//concept of mini hoisting 

console.log(addone(5));
// console.log(addTwo(5));  //here we will get error but not in addone
function addone(num1)
{
    return num1+1;
}
const addTwo=function(num2)
{
    return num+2;
}


//we now that before calling a function we should define it first if we are not declaring it