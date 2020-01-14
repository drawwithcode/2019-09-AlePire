var gallina;
var uovo;
var nidovuoto;
var nido1;
var nido2;
var nido3;
var pulcini;
var pulciniyes = false;

var value = 0;

function preload(){
  gallina = loadImage('assets/gallina.png');
  uovo = loadImage('assets/uovo.png');
  nidovuoto = loadImage('assets/nido.png');
  nido1 = loadImage('assets/nido1.png');
  nido2 = loadImage('assets/nido2.png');
  nido3 = loadImage('assets/nido3.png');
  pulcini = loadImage('assets/pulcini.png');

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  setShakeThreshold(20);
  frameRate(12);
  angleMode(DEGREES);
}

function draw() {
  background('lightblue');
  image(gallina,(windowWidth/2)-gallina.width/3,(windowHeight/2)-gallina.height,200,200);
  image(nidovuoto,(windowWidth/2)-nidovuoto.width/12,(windowHeight/2)+150,200,100);

  if(value <= 75){
  push();
  fill('white');
  textFont('Open Sans');
  textSize(25);
  textStyle(BOLD);
  textAlign(CENTER);
  text('SHAKE THE PHONE',width/2,height/2+30);
  text('TO MAKE SOME EGGS!',width/2,height/2+60);
  pop();
  }

  if(value >= 75){
    image(nido1,(windowWidth/2)-nido1.width/12,(windowHeight/2)+150,200,100);
  }
  if(value >= 150){
    image(nido2,(windowWidth/2)-nido2.width/12,(windowHeight/2)+150,200,100);
  }
  if(value >= 250){
    image(nido3,(windowWidth/2)-nido3.width/12,(windowHeight/2)+150,200,100);
  }
  if(value >= 300 && value <= 499){
    push();
    fill('white');
    textFont('Open Sans');
    textSize(25);
    textStyle(BOLD);
    textAlign(CENTER);
    text('AWESOME!',width/2,height/2+30);
    text('NOW TOUCH THE EGGS',width/2,height/2+60);
    text('AND SEE WHAT HAPPENS!',width/2,height/2+90);
    pop();
  }
  if(value >= 300 && touches.length >= 1){
    image(pulcini,(windowWidth/2)-pulcini.width/12,(windowHeight/2)+150,200,100);
  }

}

  // prevent dragging the screen around
  function touchMoved() {
    return false;
  }

  function touchEnded() {
  DeviceOrientationEvent.requestPermission();
  }

  function deviceShaken(){
    value = value + 1;
  }
