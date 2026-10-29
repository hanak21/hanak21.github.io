let balls = [];
let numBalls = 10000;

function setup() {
  createCanvas(1280, 960);

  for (let i = 0; i < numBalls; i++) {
    balls.push(createRandomBall());
  }
}

function draw() {
  background(120);

  for (let ball of balls) {
    let active = ball.contains(mouseX, mouseY) || onBody;

    ball.update(1);
    ball.respond(active);
  
  }
}

function createRandomBall() {
  return new Ball(
    random(width),
    random(height),
    color(random(255), random(255), random(255)),
    random(2, 8),
  );
}
