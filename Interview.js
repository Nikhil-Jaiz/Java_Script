function sum(a,b)
{
  "Use strict"

    a=100;
    b=200;
    //JS has a problem that  then we overwrite then the Key  word of JS also do get overwrite
    //To solve this problem we cna use "USe Strict IN JS"
    
    return arguments[0] +arguments[1];
}
console.log(sum(10,10));
