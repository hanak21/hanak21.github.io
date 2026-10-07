// IAT 806 · Lab 03 starter: the dancers from Week 3, ready for your website.
// Run with Live Server. Uses p5 2.x (async setup, await loadImage).

const FRAME_COUNT = 8;

// one array holds all eight poses
let frames = [];

// which frame the click-controlled dancer shows
let index = 0;

//sounds
let sounds = [];
let soundIndex = 0;

//animation paused is false
let isPaused = false;

//set default background color
let backColor = 240;

// parallel arrays, one entry per animated dancer
let xs = [200, 360, 520];
let speeds = [4, 8, 16]; // draw-frames per pose: smaller = faster

async function setup() {
  const canvas = createCanvas(700, 420);

  snd = await loadSound("sounds/sound0.mp3"); // a sound

  // puts the canvas inside <div id="sketch-holder"> in index.html
  canvas.parent("sketch-holder");

  textFont("monospace");
  textSize(14);

  // load all eight poses with a loop and string concatenation
  for (let i = 0; i < FRAME_COUNT; i++) {
    frames.push(await loadImage("art_frames/frame" + i + ".png"));
  }

  // in setup(), after the frames loop:
  for (let i = 0; i < 4; i++) {
    sounds.push(await loadSound("sounds/sound" + i + ".mp3"));
  }
}

function draw() {
  background(backColor);

  // contact sheet: every pose, side by side
  for (let i = 0; i < frames.length; i++) {
    image(frames[i], i * 85, 10, 80, 120);
  }

  // click-controlled dancer
  image(frames[index], 20, 140, 160, 200);
  fill(0);
  text("click: frames[" + index + "]", 20, 370);

  // one loop draws every dancer, each at its own x and speed
  for (let i = 0; i < xs.length; i++) {
    let pose = floor(frameCount / speeds[i]) % frames.length;
    image(frames[pose], xs[i], 140, 150, 200);
  }
}

// advance the index, wrapping at the end
function mousePressed() {
  userStartAudio();

  console.log("Playing sound", soundIndex, sounds[soundIndex]);

  sounds[soundIndex].play();

  soundIndex = (soundIndex + 1) % sounds.length;
  index = (index + 1) % frames.length;
}

// color background on click

  //changing backgrounds
  function mouseClicked() {
   backColor = color(random(255), random(255), random(255));
  }

//animation pauses and unpauses when A is pressed

function keyPressed() {
  if (key === "a" || key === "A") {
    isPaused = !isPaused;

    if (isPaused) {
      noLoop();
    } else {
      loop();
    }
  }


}
