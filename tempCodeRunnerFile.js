let promise2=new Promise((resolve,reject)=>{
   setTimeout(function()
{
    console.log("Performing Async Task2");
},2000);
resolve();
})

//consuming promise without using resolve
promise2.then(()=>
{
    console.log("Async 2 will not be completed if not called resolve");
})