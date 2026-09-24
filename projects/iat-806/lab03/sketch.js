console.log("I believe");

let circleX = 150;
let circleY = 150;
let speedX = 5;
let speedY = 5;
let size = 100;
let radius = size / 2;
let passed = true;
let sizeInceremnent = 1;
let color;
let rightColor = "red";
let leftColor = "blue";

function setup() {
  const canvas = createCanvas(800, 600);
  //circleX = 600;
}

function draw() {
  background(20);
  fill(47, 79, 216);
  circleY = height / 2;
  console.log(circleX);
  circle(circleX, circleY, size);
  circleX = circleX + speedX;
  circleY = circleY + speedY;
  // if the x position of our circle was larger than the width, reset the value to 0
  size = size + sizeInceremnent;
  radius = size / 2;

  if (circleX >= width - radius || circleX < 0 + radius) {
    speedX = speedX * -1;
    sizeInceremnent = sizeInceremnent * -1;
  }

  if (circleY >= height - radius || circleY < radius) {
    speedY = speedY * -1;
  }

  if (circleX > width / 2) {
    color = rightColor;
  } else {
    color = leftColor;
  }
}

function mousePressed() {
  circleX = 0;
}
