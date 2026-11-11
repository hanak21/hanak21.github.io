let handPose;
let video;
let predictions = [];
let handDetectedOnce = false;

let handPoseReady = false;
let balls = []; // the 10 moving balls
let fingertipBall; // the ball that follows your finger


let timerStartTime = 0;
let timerRunning = false;
let gameTime = 5000; // 5 seconds
let lastSwitchTime = 0;
let switchInterval = 1000; // 1000 ms = 1 second

async function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO, { flipped: true });
  video.size(width, height);
  video.hide();

  print("Loading HandPose...");
  handPose = await ml5.handPose({ flipped: true });
  handPoseReady = true;
  console.log("HandPose loaded!");

  handPose.detectStart(video, gotHands);

  // Create 10 random balls
  for (let i = 0; i < 10; i++) {
    let ballX = random(0, width);
    let ballY = random(0, height);
    let ballColor = color(20, 130, 200, 180);
    let ballRadius = 20;

    balls.push(new Ball(ballX, ballY, ballColor, ballRadius));
  }

  // Create the fingertip ball
  fingertipBall = new Ball(width / 2, height / 2, color(255, 0, 0), 25);
}


function gotHands(results) {
  predictions = results;

  //once hand is detected, starts camera and timer
  if (predictions.length > 0 && timerRunning === false) {
    handDetectedOnce = true;
    timerRunning = true;
    timerStartTime = millis();
  }
}



function draw() {


  // This is the Start Game state
  if (handDetectedOnce === false) {
    background(0);
    textSize(32);
    fill(255);
    noStroke();
    strokeWeight(4);
    text("Pop the Balls!", 230, 180);
    textSize(22);
    text("Raise your hand to start the game.", 170, 250);
        text("Pop 10 balls before time runs out!", 170, 280);
    return;
  }

  //timer to Game over state

 if (millis() - timerStartTime >= gameTime) {
    background(0);

    fill(255);
    noStroke();
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Game over!", width / 2, height / 2);

    return;
  }

  // Playing state

  image(video, 0, 0, width, height);

  

  drawTimer();


  // Draw and move the 10 balls
  
  for (let ball of balls) {
    if (ball.visible) {
      ball.change(2);
      ball.show();
    }
  }

  // Draw the fingertip ball
  drawFingertipBall();

  if (millis() - lastSwitchTime > switchInterval) {
    lastSwitchTime = millis();
    updateVisibleBalls();
  }
}

function updateVisibleBalls() {
  for (let ball of balls) {
    // Each ball has a 50% chance of being visible
    ball.visible = random() < 0.5;
  }
}

function drawFingertipBall() {
  if (predictions.length > 0) {
    let prediction = predictions[0];
    let tip = prediction.index_finger_tip;

    fingertipBall.x = tip.x;
    fingertipBall.y = tip.y;
  }

  fingertipBall.show();
}




function drawTimer() {
  let timePassed = millis() - timerStartTime;
  let secondsLeft = ceil((gameTime - timePassed) / 1000);

  fill(255);
  noStroke();
  textSize(32);
  textAlign(LEFT, TOP);
  text(secondsLeft, 20, 30);
}
