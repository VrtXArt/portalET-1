//import stringsound;
//SoundFile soundfile;



var link;
let mySound;

var et;
var opacity = 0;
var img; //here
var txt;
var trc;
let overButton = false;

var myboolean = backwards=false;
let timeLapse=400;
let timeTrack;

function preload() {
  var audio = new Audio('fabFX.mp3');
audio.play();
}

function setup() {
 createCanvas(600, 600);

    
    //soundfile = new SoundFile(this, "fabFX.mp3");
   //soundfile.loop();


   //capa = loadImage("esfera1600.jpg");


  //rect move
  /*
  img = createImage(100, 100, ARGB);  // here
   for (int i = 0; i < img.pixels.length; i++) {  // here
   float a = map(i, 0, img.pixels.length, 255, 0); //here
   img.pixels[i] = color(255, 204); //here
   }
   */

  //images
  trc = loadImage("Trance3.png");
  txt = loadImage("TextoTecFXpng.png");
  et = loadImage("etFXpng.png");  // Load the image into the program
  et.resize(258, 458);
}



function draw() {
  background(0);  // total canva black



  // float playbackSpeed = map(mouseX, 0, width, 0.25, 4.0);
  //soundfile.rate(playbackSpeed);

  // Map mouseY from 0.2 to 1.0 for amplitude
  // float amplitude = map(mouseY, 0, width, 0.2, 1.0);
  // soundfile.amp(amplitude);

  // Map mouseY from -1.0 to 1.0 for left to right panning
  // float panning = map(mouseY, 0, height, -1.0, 1.0);
  //  soundfile.pan(panning);



  // rect flahing/blinking

  let m = millis();
  fill(m % 200);              // velocity of flashs ** not working good ** maybe my computer..
  rect(25, 25, 555, 555, 30);
  //image(et, 130, 125 );
 // image(txt, 50, 40);
 

  //rgb
  tint(20, 17, 247, 100); // Alpha to 102 without changing the tint
  image(et, 140, 125 );
  tint(255, 0, 0, 80); // Tint to yellow, alpha to 153
  image(et, 120, 125 );





//opacity
  if (opacity < 255) { // When less than the maximum,
    opacity += 0.5; // increase opacity
  }
  tint(255, opacity);
  image(et, 130, 125 );
  image(txt, 50, 40);
  image(trc, 85,130);

  noFill();
 stroke(255);

  ellipse(mouseX, mouseY-55, 200, 200);

  //button link to web page

  if (overButton == true) {
    var m4 = millis();
    fill(m4 % 150);
    circle(290, 250, 30);
    cursor(CROSS);
  } else {
    noStroke();
    noFill();
    cursor(HAND);
  }
}

//circle(260, 230, 30);




function mousePressed() {
  /*if (overButton) {
    link("https://libgen.is/book/index.php?md5=9EF8030F1EB1E5BA8862B5D16C48DDF8");
    link("https://libgen.is/search.php?&req=Java+The+Complete+Reference+&phrase=1&view=simple&column=def&sort=year&sortmode=DESC");

  }
  */
  window.location.replace("https://libgen.is/search.php?&req=Java+The+Complete+Reference+&phrase=1&view=simple&column=def&sort=year&sortmode=DESC");
 
  
}


function mouseMoved() {
  checkButtons();
}

function mouseDragged() {
  checkButtons();
}


function checkButtons() {
  if (mouseX > 200 && mouseX-40 < 300 && mouseY+35 > 200 && mouseY <300) {
    overButton = true;
  } else {
    overButton = false;
  }
}