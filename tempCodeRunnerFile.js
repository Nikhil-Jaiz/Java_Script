console.log("Start");

//SetTimeOut takes handlers that is Function without name
setTimeout(()=>
{
  console.log("The TimeOut is An asynchronous operation that will be executed after 2000ms and this does not block the flow of the code and will be executed at the last after end ")
},2000);
console.log("End");