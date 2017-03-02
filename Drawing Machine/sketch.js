var angle = 0.5;
var angle=.2;


function setup() {
  createCanvas(800, 800);
  background (500, 150, 10);
  textFont("Helvetica");
  textSize(25);
}
function draw() {

  translate(mouseX, mouseY);
  rotate(angle);

  angle += .5;
  angle+= .2;

  fill(300, 100, 100, 50);

  text("Maxie  Max    MAXX    MAXIE", mouseX, mouseX); // Write at coordinate
}
