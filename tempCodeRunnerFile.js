async function getdata()
{
    return new Promise ((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve(455);
        },2000);
    })
}
async function main()
{
    console.log("Loading Modules");
    console.log("Do something else");
    console.log("Loading Data");
    let dt=await getdata();   //await is valid only in async functions
    console.log("Processing Data");
}
main();
