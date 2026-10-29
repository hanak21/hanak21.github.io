class Ball {
  constructor(x, y, ballColor, radius) {
    this.x = x;
    this.y = y;
    this.ballColor = ballColor;
    this.radius = radius;

    this.originalColor = ballColor;
    this.highlightColor = "yellow";

    this.defaultStrokeColor = "black";
  }

  move(byHowMuch) {
    this.x += random(-byHowMuch, byHowMuch);
    this.y += random(-byHowMuch, byHowMuch);
  }

  show() {
    stroke(this.defaultStrokeColor);
    fill(this.ballColor);
    circle(this.x, this.y, this.radius * 2);
  }

  changeSize(byHowMuch) {
    this.radius = constrain(this.radius + random(-byHowMuch, byHowMuch), 2, 30);
  }

  update(byHowMuch) {
    this.move(byHowMuch);
    this.show();
  }

  highlight() {
    this.ballColor = this.highlightColor;
  }
  deHighlight() {
    this.ballColor = this.originalColor;
  }

  respond(active) {
    if (active) this.highlight();
    else this.deHighlight();
  }
}
