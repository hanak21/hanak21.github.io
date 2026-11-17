
class Ball {
  
  constructor(x, y, c, r) {
    
    this.x = x;
    this.y = y;
    this.c = c;
    this.r = r;
      this.visible = true;
  
  }

  change(byHowMuch) {
    this.changeSize(byHowMuch);
    this.move(byHowMuch);

    this.stayOnCanvas();


    
    this.show();
  }

  // keeps the ball inside the canvas
  stayOnCanvas() {
    this.x = constrain(this.x, 100, width);
    this.y = constrain(this.y, 100, height);
  }

  move(byHowMuch) {

    this.x += random(-byHowMuch, byHowMuch);
    this.y += random(-byHowMuch, byHowMuch);
  }

  changeSize(byHowMuch) {

    this.r = constrain(this.r + random(-byHowMuch, byHowMuch), 2, 50);
  }

  
  show() {

    fill(this.c);
    circle(this.x, this.y, this.r);
  }
}
