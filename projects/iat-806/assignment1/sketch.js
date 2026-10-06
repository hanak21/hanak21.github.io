function setup() {
  createCanvas(800, 600);
  frameRate(5);
}

function draw() {
  background("#b5aaf7");

  stroke("black");
  noFill();
  strokeWeight(1);

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

  //firefly jar + if/else to make the jar darken
  strokeWeight(2);
  if (mouseIsPressed) {
    fill("gray");
  } else {
    noFill();
  }
  rect(200, 190, 100, 115);

  //firefly jar lid

  rect(200, 175, 100, 15);

  // point 1.
  stroke("black");
  strokeWeight(5);
  if (mouseIsPressed) {
    stroke("yellow");
  } else {
    stroke("black");
  }
  point(x, y);
  //point 2
  point(r, s);
  //point 3
  point(h, k);
  //point 3
  point(a, b);
  //point 3
  point(c, d);

  //text
  noStroke();
  fill("black");
  textSize(18);
  text("Click and hold to see the fireflies glow in the dark.", 200, 350);

  // added line to highlight the main prompt

  stroke("black");
  strokeWeight(1);
  line(210, 120, 565, 120);
  noStroke();

  //text under the jar and answer

  textSize(22);
  text("How many fireflies are in the jar?", 230, 110);
  textSize(15);
  text("Press A see the answer.", 300, 140);

  // circle answer
  noStroke();
  if (keyIsPressed && (key === "a" || key === "A")) {
    fill("gray");
  } else {
    fill("yellow");
  }
  circle(440, 240, 50);

  // number appears when A is pressed
  if (keyIsPressed && (key === "a" || key === "A")) {
    fill("black");
    textSize(24);

    // keeping "5" inside the circle
    let txt = "5";
    let txtW = textWidth(txt);
    let txtH = textSize(); // approximate height
    text(txt, 440 - txtW / 2, 260 - txtH / 2);
  }
}
