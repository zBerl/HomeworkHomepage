document.addEventListener("DOMContentLoaded", function() {

  let homeworkLeft = document.querySelector(".homeworkLeft");
  homeworkLeft.onmouseover = function() {
    homeworkLeft.style.backgroundColor = "orange";
  }
  homeworkLeft.onmouseout = function() {
    homeworkLeft.style.backgroundColor = "white";
  }
  let footer = document.querySelector("footer");
  footer.onclick = function() {
    footer.style.backgroundColor = "orange";
  }
  let homeworkRight = document.querySelector(".homeworkRight");
  homeworkRight.onclick = function() {
    homeworkRight.style.backgroundColor = "blue";
  }

  // accesses canvas
  let canvas = document.querySelector("#drawA");
  // accesses context
  let context = canvas.getContext("2d");

   // draws a triangle
   context.beginPath();
   context.moveTo(75, 50);
   context.lineTo(150, 75);
   context.lineTo(150, 25);
   context.globalCompositeOperation = "xor";
   context.fillStyle = "purple";
   context.fill();
   context.closePath();
   context.strokeStyle = "orange";
   context.stroke();
  // draws a rectangle
  context.fillStyle = "orange";
  context.fillRect(10, 10, 100, 50);
  context.strokeStyle = "blue";
  context.strokeRect(10, 10, 100, 50);
  context.fillStyle = "orange";
  // draws a circle
  context.beginPath();
  context.arc(100, 100, 50, 0, 2 * Math.PI);
  context.strokeStyle = "green";
  context.stroke();
  context.globalAlpha = 0.5;
  context.fillStyle = "turquoise";
  context.fill();

  // draws a line
  context.beginPath();
  context.moveTo(50, 50);
  context.lineTo(200, 100);
  context.strokeStyle = "green";
  context.stroke();

// draws another line that intersects the first line
  context.beginPath();
  context.moveTo(200, 0);
  context.lineTo(150, 150);
  context.strokeStyle = "green";
  context.stroke();

// creates a transform 
context.strokeStyle = "red";
context.translate(100, 100);
var dupe = 10;

for (var i = 0; i < dupe; i++) {
context.rotate(Math.PI / 10);
context.strokeRect(-50, -50, 100, 100);
};

});