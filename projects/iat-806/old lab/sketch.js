let frames = [];

async function setup() {
  createCanvas(800, 420);

  frames[0] = await loadImage("art_frames/frame1.png");
  frames[1] = await loadImage("art_frames/frame2.png");
  console.log(frames);
}

function draw() {
  background(120);
  fill(140);

  for(let i=0; i < frames.length; i++){
  let xPosition = i * 100;
  image(frames[i], xPosition, 20, 100, 125)

  }

  fill("black");
  let speed = 10;
  let slowFrame = floor(frameCount / speed);
  let index = slowFrame % 2;
 // text(floor(frameCount / speed, 500, 80));
  //text(frameCount, 500, 100);
  //text(index, 500, 120);
  //text)index == -, 500, 140);
  //console.log(index);
  if (index == 0) {
    image(frames[0], 100, 200);
  } else {
    image(frames[1], 100, 200);
  }
}
