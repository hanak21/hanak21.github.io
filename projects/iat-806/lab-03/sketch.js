let frame0;
let frame1;

async function setup(){
  createCanvas(800, 420);

  frame0 = await loadImage("art_frames/frame1.png");
  frame1 = await loadImage("art_frames/frame2.png");
}

function draw() {
  background(120);
  fill(140);
  circle(400, 233, 100);
  image(frame0, 100, 100);
}