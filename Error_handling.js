let a=prompt("ENter first number ");
let b=prompt("Enter second number");

if(a==NaN || b==NaN)
{
    throw SyntaxError("Syntax Error Bhai");
}
//The prompt takes input in the form of string hence we need to convert it into integer
let x=5;
let sum=parseInt(a) +parseInt(b);
//try means try this code
try{
    console.log(sum *x);  // if we declare x above then try part and finally part will execute
}
//the catch part identifies the error
catch(error)
{
    console.log("Error hai Bhai iskko resolve kro");
}
finally
{
    console.log("Files are being closed and db connection is terminated");
}
//Out of try or catch anyone block will be executed and finally will be executed everytime
//even though if it is written after return statement
