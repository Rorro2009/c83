var mouseEvent = "empty";
var mouse_position, mouse_position_x, mouse_position_y;
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

color = "green";
ancho = 1;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 3;
//cord x, cord y, radio, anguloinicial, angulofinal
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", Mimousedown);

function Mimousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("ancho").value;
    mouseEvent = "mouseDown";
 }

 canvas.addEventListener("mousemove", MouseMove);

 function MouseMove(e)
 {
   mouse_position
   current_mouse_position_x = e.clientX - canvas.offsetLeft;
   current_mouse_position_y = e.clientY - canvas.offsetTop;
   if (mouseEvent == "mouseDown");
   {
   ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.linewidth = 3; 
    console.log("Last position of x and y coordinates = ");
    console.log(mouse_position_x, mouse_position_y);
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + current_mouse_position_x + "y = " + current_mouse_position_y);
    ctx.lineTo(current_mouse_position_x, current_mouse_position_y);
    ctx.stroke();
   }
   last_position_of_x = current_position_of_mouse_x;
   last_position_of_y = current_position_of_mouse_y;
 }






