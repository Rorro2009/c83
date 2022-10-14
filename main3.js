
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('mycanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    ancho = 1;
    var width_phone = screen.width;
    new_width_phone = screen.width-70;
    new_height_phone = screen.height-300;
    if(width_phone < 992)
    {
        document.getElementById("mycanvas").width = new_width_phone;
        document.getElementById("mycanvas").height = new_height_phone;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", My_touchstart);
    function My_touchstart(e)
    {
        console.log("my touch start");
        color = document.getElementById("color").value;
        ancho = document.getElementById("ancho").value;
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft; 
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }



    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("my touch move")
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = ancho;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }


//actividad adicional
function Reset() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


