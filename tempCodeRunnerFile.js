const RandomColor=function()
{
    let color='#';
    const hex="0123456789ABCDEF";

    for(let i=0;i<6;i++)
    {
        //generating a random index between 0 to15
        let ranIndex=Math.floor(Math.random()*15);
        color+=hex[ranIndex];
    }
    return color;
};
console.log(RandomColor);