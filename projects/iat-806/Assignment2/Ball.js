
class Ball {
  // this function is called when an instance of Ball is created.
  // x ix x position
  // y is y position
  // c is color
  // r is radius
  // this is the function that is called when you create a new ball or a new instance of this Class.
  constructor(x, y, c, r) {
    // it's like the instance saying, MY X is 400. In Python the keyword is self.x.
    this.x = x;
    this.y = y;
    this.c = c;
    // ALSO this is a diameter, not radius.
    // This is our mistake... we should have looked at the documentation.
    this.r = r;
      this.visible = true;
   

    // TODO: if one of your methods needs a new attribute, create it here.
  }

  change(byHowMuch) {
    this.changeSize(byHowMuch);
    this.move(byHowMuch);

    this.stayOnCanvas();
    // TODO: call your two new methods here, before show().


    
    this.show();
  }

  // keeps the ball inside the canvas
  stayOnCanvas() {
    this.x = constrain(this.x, 100, width);
    this.y = constrain(this.y, 100, height);
  }

  // if this method is called, the ball would move. Every time it is called, it's x and y are changed a little bit.
  move(byHowMuch) {
    // this.x = this.x + random(-5,5)
    this.x += random(-byHowMuch, byHowMuch);
    this.y += random(-byHowMuch, byHowMuch);
  }

  changeSize(byHowMuch) {
    // we fix the size like this:
    // the constrain is saying that it shouldn't grow larger than a certain amount.
    this.r = constrain(this.r + random(-byHowMuch, byHowMuch), 2, 50);
  }

  // TODO: your first new method goes here. Name it for what it does.


  
  // TODO: your second new method goes here.


  // ????
  // What does ab all need to do?
  // Exist ...
  // You NEED TO SHOW THE BALL
  show() {
    // Here ...
    // Here show is not setting and attributing. It's setting the color of the ball to something.

    fill(this.c);
    circle(this.x, this.y, this.r);
  }
}
