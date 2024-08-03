//adding multiple html element through js


var main = document.getElementById("main");
var s="";
let arr=
   ["https://i.pinimg.com/736x/b8/a2/bb/b8a2bb9b5e5a498bac4b510160124c5f.jpg",
    "https://i.pinimg.com/736x/7f/65/55/7f6555c26969d905a134f0d87d3b94bb.jpg",
    "https://i.pinimg.com/736x/41/a6/ae/41a6ae3391a25d39330ba5603aab7f23.jpg",
    "https://i.pinimg.com/736x/95/3b/db/953bdb01118c05b976aaa066bf6c8391.jpg",
    "https://i.pinimg.com/736x/74/ba/bc/74babca8f54cb0198f9622d75ab48de0.jpg",
    "https://i.pinimg.com/564x/ef/45/52/ef4552d756efc7aa11d87acbc8df5912.jpg",
    "https://i.pinimg.com/736x/8d/89/37/8d89370e222db44293f3aab5f9c7e97f.jpg",
    "https://i.pinimg.com/564x/a7/5b/64/a75b646e57bb3ddbfa8c11af1717ec9d.jpg",
    "https://i.pinimg.com/564x/10/f4/a2/10f4a24bffa69764965e862b76f94ca2.jpg",
    "https://i.pinimg.com/564x/d2/7c/21/d27c21d16cbc61e6a6de61342c5558b7.jpg"];


for(let i=1;i<=65;i++){
    let r=Math.floor(Math.random()*10);
    s +=`<div class="card"><img src=${arr[r]}></img></div>`;
}
main.innerHTML=s;
