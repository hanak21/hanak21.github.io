let handPose;
let video;
let predictions = [];

async function setup() {
  // Create the canvas
  createCanvas(640, 480);

  // Create the webcam video and match it to the canvas size
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // Load the HandPose model
  print("Loading HandPose...");
  handPose = await ml5.handPose();
  console.log("HandPose loaded!");

  // Start detecting hands from the webcam
  handPose.detectStart(video, gotHands);
}

// Callback function that receives new predictions
function gotHands(results) {
  predictions = results;
}

function draw() {
  // Draw the webcam feed
  image(video, 0, 0, width, height);

  // Draw the circle at the fingertip
  drawObject();
}

// Draw a circle at the tip of the index finger
function drawObject() {
  if (predictions.length > 0) {
    let prediction = predictions[0];

    let tip = prediction.index_finger_tip;

    noStroke();
    ellipse(round(tip.x), round(tip.y), 33, 33);
  }
}