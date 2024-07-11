let Promise1=new Promise ( function(resolve,reject)
{
    setTimeout(function()
       {
        console.log("Performing an Async Time");
       },2000)
});
Promise1.then(function()
{
    console.log("Async Event Completed");
})