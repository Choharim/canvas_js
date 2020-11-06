const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 650;
canvas.height = 650;

ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

let painting = false;

function startPainting(){
  painting = true;
}

function stopPainiting(){
  painting = false;
}

function mouseIn(event){
  const x = event.offsetX;
  const y = event.offsetY;
  if(painting){
    ctx.lineTo(x,y);
    ctx.stroke();
  }else{
    ctx.beginPath();
    ctx.moveTo(x,y);
  }
  
 
} 

if(canvas){
  canvas.addEventListener("mousemove",mouseIn);
  canvas.addEventListener("mousedown",startPainting);
  canvas.addEventListener("mouseup",stopPainiting);
  canvas.addEventListener("mouseleave",stopPainiting);
}