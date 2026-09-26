console.log("I believe");

let circleX = 50;
let circleY = 50;
let speedX = 5;
let speedY = 5;
let size = 100;
let radius = size / 2;
let sizeInceremnent = 1;
let color;
let rightColor = "black";
let leftColor = "white";
let backgroundColors = ["purple", "pink"];

function setup() {
  const canvas = createCanvas(800, 600);
}

function draw() {

  // change the color of the background every 2 seconds between pink and purple
  let colorIndex = floor(millis() / 2000) % backgroundColors.length;
  background(backgroundColors[colorIndex]);

  if (circleX > width / 2) {
    color = rightColor;
  } else {
    color = leftColor;
  }
  fill(color);

  circle(circleX, circleY, size);
  circleX = circleX + speedX;
  circleY = circleY + speedY;
  // if the x position of our circle was larger than the width, reset the value to 0
  size = size + sizeInceremnent;
  radius = size / 2;

  if (circleX >= width - radius || circleX < radius) {
    speedX = speedX * -1;
    sizeInceremnent = sizeInceremnent * -1;
  }

  if (circleY >= height - radius || circleY < radius) {
    speedY = speedY * -1;
  }
}

// the ball will speed up and reverse direction when clicked

function mousePressed() {
  speedX = speedX * -1.2;
  speedY = speedY * -1.2;

  
}
