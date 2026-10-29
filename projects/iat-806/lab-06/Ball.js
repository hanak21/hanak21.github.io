class Ball {

    //constructor intializes the object
  constructor(x, y, ballColor, radius) {
    this.x = x;
    this.y = y;
    this.ballColor = ballColor;
    this.radius = radius;
    this.baseR = radius;
    this.radius = radius;

    this.originalColor = ballColor;
    this.highlightColor = "yellow";

    this.defaultStrokeColor = "black";

     this.showStroke = false;
  }

  //initalize movement
  move(byHowMuch) {
    this.x += random(-byHowMuch, byHowMuch);
    this.y += random(-byHowMuch, byHowMuch);
  }

//inialize display of balls

  show() {
    stroke(this.defaultStrokeColor);
    fill(this.ballColor);
    circle(this.x, this.y, this.radius * 2);
  }


  // inialize size
  changeSize(byHowMuch) {
    this.radius = constrain(this.radius + random(-byHowMuch, byHowMuch), 2, 30);
  }

  update(byHowMuch) {
    this.move(byHowMuch);
    this.show();
  }

  // highlight and "dehighlight"
  highlight() {
    this.ballColor = this.highlightColor;
  }
  deHighlight() {
    this.ballColor = this.originalColor;
  }


  // highlight condition
  respond(active) {
    if (active) this.highlight();
    else this.deHighlight();
  }

contains(px, py) {
if (dist(this.x, this.y, px, py) < this.radius)  {
      return true;
    } else {
      return false;
    }
  }

    isOnBody(mask) {
    let px = mask.get(floor(this.x), floor(this.y)); // [r, g, b, a]
    return px[3] < 128; // opaque = body
  }

}

class FlickerBall extends Ball {
  respond(active) {
    super.respond(active);
    // this.fillColor = color(0, 0, 0, 100);
    this.changeSize(3);
  }
}