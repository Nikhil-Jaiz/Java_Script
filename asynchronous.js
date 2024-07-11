// Asynchronous operations in JavaScript are operations that do not block the execution of the program
//  while waiting for a task to complete. These operations allow JavaScript to perform other tasks 
//  while waiting for the completion of long-running tasks, such as network requests, file reading, 
//  or timers. This non-blocking behavior is essential for creating responsive web applications.

// Examples of Asynchronous Operations in JavaScript
// Timers:

// setTimeout: Executes a function after a specified delay.
// setInterval: Repeatedly executes a function with a fixed time delay between each call.


console.log("Start");

//SetTimeOut takes handlers that is Function without name
setTimeout(()=>
{
  console.log("The TimeOut is An asynchronous operation that will be executed after 2000ms and this does not block the flow of the code and will be executed at the last after end ")
},2000);
console.log("End");


//Hona toh ye chahiye tha ki pehle start print ho phir Timeout wla par aseha nahi hoga kyuki 
//TimeOut non blocking in nature hai  aur woh 2000ms ke baad hi print hoga


//Other examples of Asynchronous operation is 
//Promises 
//3-Async/Await
//4-EventListener