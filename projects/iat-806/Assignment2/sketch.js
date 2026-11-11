let handPose;
let video;
let predictions = [];
let handDetectedOnce = false;

let balls = []; // the 10 moving balls
let fingertipBall; // the ball that follows your finger

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

  // Once a hand is detected, keep this true forever
  if (predictions.length > 0) {
    handDetectedOnce = true;
  }
}

function draw() {

  // This is the Start Game state
  if (handDetectedOnce === false) {
    background(0);
    textSize(32);
    fill(255);
    noStroke(0);
    strokeWeight(4);
    text("Pop the Balls!", 230, 180);
    textSize(22);
    text("Raise your hand to start the game.", 170, 250);
        text("Pop 10 balls before time runs out!", 170, 280);
    return;
  }

  image(video, 0, 0, width, height);
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

    // Move the fingertip ball to the finger
    fingertipBall.x = tip.x;
    fingertipBall.y = tip.y;
    fingertipBall.show();
  }

  // Always show it, even if no hand is detected
}
