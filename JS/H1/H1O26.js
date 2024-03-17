function setup() {
  canvas = createCanvas(1000,300);
  canvas.parent('processing');
  noStroke();
  noLoop();
}

function draw() {
  background('orange');
  fill('wheat');
  rect(0,250,width,height - 250);
  //translate(125,0);

  for (var n = 0;n <=5 ;n++) {
    tekenHuis();
    tekenBoom(n);
    translate(165,0);
  }
}

function tekenHuis() {
  push();
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(10,170,110,110);
  fill('gray');
  triangle(10,170,110,170,60,90);
  noStroke();
  rect(30,220,40,60);
  pop();
}

function tekenBoom(x) {
  push();
  noStroke();
  fill('sienna');
  rect(90,160,40,130);
  fill('olive');
  ellipse(110,185 - 15*x,60 + 10*x,100 + 20*x);
  pop();
}
