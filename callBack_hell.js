//One callBack inside other callBack or API is called callBack Hell
console.log("Namaste");

//now if we want hello bhaiya to execute after some time we can use the concept of CallBack and async JS
//callback are function that are passed as arguments inside other function and are without name
setTimeout(
function()
{
    console.log("Hello Bhaiya");
}
,2000);
console.log("Kya bey");


// api.createOrder();
// api.procedTpayment();
// api.showOrderSummary();
// api.updateWallet();
api.createOrder(
function()
{
    api.procedTpayment(
        function()
        {
            api.showOrder(
                function()
                {
                    api.updateWallet();
                    
                }
            );
        }
    );  
}
);
//disadvantage of using callback known as callback hell