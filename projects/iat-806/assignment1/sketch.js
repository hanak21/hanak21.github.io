let backColors = ["#95114a", "#07ee77", "#e8e806"];
let colorIndex = 0;

let jarNum = 5;
let mouseAnswer = 2;

function setup() {
  createCanvas(800, 600);
  frameRate(5);
}

//my own function to calculate the number of fireflies (a spoiler!)

function fireflyAnswer() {
  let answer = jarNum + mouseAnswer;
  return answer;
}

function draw() {
  background("black");

  //mouse that is a firefly
  circle(mouseX, mouseY, 10, 10);
  stroke("white");
  strokeWeight(1);

  line(210, 120, 575, 120);
  noStroke();

  // jar design

  stroke("white");
  noFill();
  strokeWeight(1);

  // FIREFLIES FLY AROUND
  //point 1 - random coordinates
  let x = random(200, 300);
  let y = random(200, 300);
  //point 2 - random coordinates
  let r = random(200, 300);
  let s = random(200, 300);
  //point 3 - random coordinates
  let h = random(200, 300);
  let k = random(200, 300);
  //point 4- random coordinates
  let a = random(200, 300);
  let b = random(200, 300);
  //point 4- random coordinates
  let c = random(200, 300);
  let d = random(200, 300);

   //firefly jar

  rect(200, 190, 100, 115);

  //firefly jar lid

  rect(200, 175, 100, 15);

  //making sure the fireflies change color

  stroke(backColors[colorIndex]);
  strokeWeight(7);

  // fireflies defined
  point(x, y);
  point(r, s);
  point(h, k);
  point(a, b);
  point(c, d);

    //making sure the fireflies change color and it loops back to beginning of array

  colorIndex = (colorIndex + 1) % backColors.length;

  //text on screen
  noStroke();
  fill("white");
  textSize(18);
  text("These fireflies are a colourful bunch.", 250, 350);
  textSize(22);
  text("How many fireflies are on screen?", 230, 110);
  textSize(15);
  text("Press A and hold to see the answer.", 280, 140);
  textSize(15);
  text("Remember: count ALL fireflies on screen, in and outside the jar.", 190, 390);

  // circle changes color when key is pressed
  noStroke();
  if (keyIsPressed && (key === "a" || key === "A")) {
    fill("#95114a");
  } else {
    fill("yellow");
  }
  circle(440, 240, 50);

  // number appears when A is pressed
if (keyIsPressed && (key === "a" || key === "A")) {
  fill("black");
  textSize(24);
  text(fireflyAnswer(), 435, 248);
}
}
