function sum(a,b)  //function definition parameters
{
    return a+b;
}
// syntax of function in JS
// function name_of_function(parameters)

let a=10,b=13;
let result=sum(a,b);  //function calling arguments
console.log(result);


//Careful Note
function diff(a,b)
{
    console.log(a-b);
}

const ans=diff(5,4);  //note that diff function has not returned anything hence it cannot be stored into a variable.
console.log(ans);

// we have variable inside our string using concept of string interpolation
function StringInterpolation(name)
{
    console.log(`Hey this is ${name}`);
}
StringInterpolation("Nikhil");


// we can have default value of a parameter and when we have our value it will overwrite the default value

function Player(name="Rohit")
{
    console.log(`The name of Player is ${name}`);
}
Player("Sharmi JI");
Player();