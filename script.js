//Element selector

// let x=document.querySelectorAll("yes");
// console.log(x);

//change HTML for heading (h2)

// let x=document.querySelector("h2");
// // x.style.color="red";
// // x.style.fontFamily= "Gill Sans"

// //change in heading (h1)
// let y= document.querySelector("h1");
// y.style.backgroundColor ="red";
// // y.innerHTML="changed";

// //using setTimeout
// setTimeout(function(){ 
//     y.innerHTML="changed";
// },2000);

// setTimeout(function(){
//     x.style.color="red";
//     x.style.fontFamily= "Gill Sans"

// },4000);

//Event Listeners:- ager main kisi element ko click karu, ya fir hover karu, ya element se mouse ko bahar kar doon to kuch changes ho.
let x=document.getElementById("ele1");
x.addEventListener("click",function(){
    x.style.color="yellow";
    x.style.backgroundColor="red";
})

let y=document.getElementById("ele2");
y.addEventListener("mouseenter",function(){
    y.style.color="white";
    y.style.backgroundColor="orange";
})

//charizard pe click krne se mewtwo me change ho jaye
let z=document.getElementById("ele3");
y.addEventListener("click",function(){
    z.style.color="white";
    z.style.backgroundColor="purple";
})

//mewtwo ko click krne pe pikachu change ho jaye (pikachu-->Bulbasaur) and also color change
z.addEventListener("click",function(){
    x.style.color="white";
    x.style.backgroundColor="green";
    x.innerHTML="Bulbasaur";
})

//charizard ke changes wapas se phele jaise ho jaye wo parmanent na rahe.
y.addEventListener("mouseleave",function(){
    y.style.color="black";
    y.style.backgroundColor="white";
})

//pikachu  ke changes wapas se phele jaise ho jaye wo parmanent na rahe
x.addEventListener("mouseleave",function(){
    x.style.color="black";
    x.style.backgroundColor="white";
    x.innerHTML="Pikachu";
})
