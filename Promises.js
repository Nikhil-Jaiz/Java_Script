// In JavaScript, Promises are used for handling asynchronous operations. They provide a way to work with asynchronous code in a more manageable and readable manner compared to traditional callback functions.

// What is a Promise?
// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise can be in one of three states:

// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// Promise ia a object and JS does not have concept of Pointer (relate with C++)
let Promise1=new Promise ( function(resolve,reject)
{
    setTimeout(function()
       {
        console.log("Performing an Async Event");
       },2000)

       resolve();  //if we don't execute or call resolve then  .then won't be executed
});
Promise1.then(function()
{
    console.log("Async Event Completed");
})

//Imp Note is that .then is related with resolve  so first we have to call resolve function