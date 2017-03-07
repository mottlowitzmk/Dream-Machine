var angle = 0.5;
var angle=.2;


function setup() {
  createCanvas(800, 800);
  background (50);
  textFont("Helvetica");
  textSize(25);
}
function draw() {


  translate(mouseX, mouseY);
  rotate(5);

  angle += .5;
  angle+= .2;


  fill(10, 140, 20, 200);
ellipse(width/2,height/2,30,140);
fill(10, 40, 10, 50);

  text("O  O   O   O", mouseX, mouseY); // Write at coordinate
}


