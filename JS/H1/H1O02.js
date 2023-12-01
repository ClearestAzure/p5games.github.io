function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // noStroke();
  // fill('darkred');
  //triangle(0,0,0,450,450,450);
  
  //nostroke();
  fill('pink');
  triangle(450,0,0,225,450,450);
  //nostroke();
  fill('purple');
  triangle(0,0,450,225,0,450);
}
