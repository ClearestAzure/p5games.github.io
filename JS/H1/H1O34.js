var aantal = 100; 
var x; 
var y; 
var diameter; 

function setup() { 
canvas = createCanvas(451,451); 
canvas.parent('processing'); 
frameRate(5); 
// noLoop(); 

strokeWeight(4); 
stroke('steelblue'); 
} 
function draw() { 

background('white'); 

for (var n = 0; n<aantal; n++) { 

 

x = random (50,400) 

y = random (50, 400) 

diameter = random(25,75) 

drawcircle()}; 

} 

function drawcircle () { 

circle(x,y,diameter); 

} 