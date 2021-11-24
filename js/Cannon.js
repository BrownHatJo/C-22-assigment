class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.CannonBase = loadImage("./assets/cannonBase.png")
    this.canon = loadImage("./assets/canon.png")

  }
  display(){
    push()
    translate(this.x, this.y)
    rotate(this.angle)
    imageMode(CENTER)
    image(this.canon, 0, 0, this.width, this.height)
    pop()
    image(this.CannonBase, 70, 20, 200, 200)
    if (keyIsDown(RIGHT_ARROW) && this.angle < 70){
      this.angle = this.angle + 1
    }

    if (keyIsDown(LEFT_ARROW) && this.angle > -30){
      this.angle = this.angle - 1
    }
  }
}

