var y=200; //where strokeline begins
function setup() {
  createCanvas(1000,1000); //canvas size
  stroke(25,155,96); //moving line color
  strokeWeight(75); // stroke size
  frameRate(90);} //speed of movement

  function draw() {
  background(25,102,155); // dark blue back ground
  y=y-1; //moves stroke up by -1
  if (y<0) {
    y=height; //restarts stroke movement
  }
  line(0,y,1000,y);
}