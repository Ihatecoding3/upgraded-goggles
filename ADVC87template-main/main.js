var canvas=new fabric.canvas('mycanvas')
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
 fabric.image.fromURL(get_image,function(img){
	block_image_object=img;
block_image_object.scaletowidth(block_image_width);
block_image_object.scaletoheight(block_image_height);
block_image_object.Set({
	top:block_y,
	left:block_x
})
canvas.add(block_image_object);
 })

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
	 new_image('rr1.png');
	 console.log("r")
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	}
	
}

