
// clmtrackr returns a list of points, which reference
// pre-defined features on the face – to access them,
// we need the index in the list where those features
// can be found
let leftPupil =  27;
let rightPupil = 32;
let leftEye =  [ 23, 63, 24, 64, 25, 65, 26, 66 ];
let rightEye = [ 30, 68, 29, 67, 28, 70, 31, 69 ];
let mouth =    [ 44, 61, 60, 59, 50, 58, 57, 56 ];

let webcam = null;    // webcam object
let tracker = null;   // clmtrackr object
let features = null;  // list of facial features


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // start webcam input
  webcam = createCapture(VIDEO);
  webcam.size(width, height);

  // connect face tracking to webcam
  tracker = new clm.tracker();
  tracker.init();
  tracker.start(webcam.elt);
}


function draw() {
  
  // mirror the webcam input (which will be more
  // natural-feeling) and display it
  translate(width, 0);
  scale(-1.0, 1.0);
  image(webcam, 0, 0, width,height);  
  // get the features and, if we found some,
  // draw the mask
  features = tracker.getCurrentPosition();
  if (features.length > 0) { 
    drawMask();
  }
  
  
}


function drawMask() {

  fill(255,0,0);
  stroke(255);
  
  for (var j = 0; j < 700; j++) {
    var a = int(random(70));
    var b = int(random(20));
    
    line(features[a][0], features[a][1] , features[b][0], features[b][1]);
  }
  
  
  stroke(0);
  
  for (var k = 0; k < 20; k++) {
    var lefta = random(leftEye);
    var leftb = random(leftEye);
    
    var righta = random(rightEye);
    var rightb = random(rightEye);

    
    line(features[lefta][0], features[lefta][1] , features[leftb][0], features[leftb][1]);
    line(features[righta][0], features[righta][1] , features[rightb][0], features[rightb][1]);
  }
  
  for (var n = 0; n < 20; n++) {
    var moutha = random(mouth);
    var mouthb = random(mouth);
    
    line(features[moutha][0], features[moutha][1] , features[mouthb][0], features[mouthb][1]);
  }
}

