const canvas = document.querySelector("#  jsCanvas");

let painting = false;

function mouseOut(event){
  painting = false;
}

function mouseUp(event){
  painting = false;
}

function mouseDown(event){
  painting = true;
}

function mouseIn(event){
  const x = event.offsetX;
  const y = event.offsetY;
} 

if(canvas){
  canvas.addEventListener("mousemove",mouseIn);
  canvas.addEventListener("mousedown",mouseDown);
  canvas.addEventListener("mouseup",mouseUp);
  canvas.addEventListener("mousemove",mouseOut);
}