// global variables

let balls = [];
let numBalls = 6000;

let bodySegmentation;
let video;
let segmentation;
let options = {
  maskType: "person",
};


//initialize video, ml5 and canvas
 async function setup() {
  createCanvas(1280, 960);

  // Start the camera first
  video = createCapture(VIDEO, { flipped: true });
  video.size(width, height);
  video.hide();

  for (let i = 0; i < numBalls; i++) {
    balls.push(createRandomBall());
  }

  // Then load and start segmentation
  bodySegmentation = await ml5.bodySegmentation("SelfieSegmentation", options);
  bodySegmentation.detectStart(video, gotResults);
}

function draw() {
  background(120);
  image(video, 0, 0);

  for (let ball of balls) {
    let onBody = segmentation && ball.isOnBody(segmentation.mask);
    let active = ball.contains(mouseX, mouseY) || onBody;

    ball.update(1);
    ball.respond(active);
  }
}

function createRandomBall() {
  let ballX = random(0, width);
  let ballY = random(0, height);
  let ballC = color(140, 0, 140 + random(-100, 100), 50);
  let ballR = 5;

  return new Ball(ballX, ballY, ballC, ballR);
}

function mousePressed() {
  let i = balls.findLastIndex((ball) => ball.contains(mouseX, mouseY));

  if (i !== -1) {
    balls.splice(i, 1);
  } else {
    let ballC = color(20, 130, 140 + random(-100, 100), 180);
    balls.push(new Ball(mouseX, mouseY, ballC, 10));
  }
}

function checkMouseOver() {
  balls.forEach((ball, i) => {});
}

function gotResults(result) {
  segmentation = result;
}
