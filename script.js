// function for generating hex code randomly
let code=()=>{
    let a="#"
    let hexa="1234567890abcdef"

    //generating code randomly 6-digit code
    for(let i=0;i<6;i++){
        a=a+hexa[Math.floor(Math.random()*16)]
    }
    console.log(a);
    return a;
}

//function for changing the color of the background
function changeColor(){
    document.body.style.backgroundColor=code();
}
const btn=document.getElementById("butt");

btn.addEventListener("click",changeColor)