//Async and Await are used to control the Asynchronous Programming Control

//Without await a async event/operations like setTimeout will run in Background and will allow
//other parts of the program to execute.
//But if we want the synchronous nature to execute task or event sequentially then we need the 
//concept of Async ans await



// function getdata()
// {
//     return new Promise ((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             console.log("Data will be fetched using fetch() APi method later ")
//         },2000);
//     })
// }
// console.log("Loading Modules");
// console.log("Do something else");
// console.log("Loading Data");
// let dt=getdata();
// //in the absence of await the getdata method will run in Background but to control this we need await and async
// console.log("Processing Data");


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
