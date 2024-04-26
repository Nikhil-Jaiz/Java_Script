const LiList=document.querySelectorAll("li");

LiList.forEach((li)=>{
    console.log(li);
})

//different dom manipulation selector are
// -Document.getElementByID
// -Document.getElementByClassName
// -Document.querySelector
// -Document.QuerySelector All
// -Document.getElementByTag

//convert Html collection to array using array from method
// Array.from(Html_collection)
// we cannot apply foreach to html collection hence we need to convert it into array list  