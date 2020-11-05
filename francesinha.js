class Francesinha {
  constructor() {
    this.health = 2;
    this.x = WIDTH;
    this.y = FLOOR;
    this.width = 75;
    this.height = 50;
    this.speed = 1;
  }

  draw() {
    this.y = FLOOR - this.height;
    image(francesinhaOne, this.x, this.y, this.width, this.height);
  }
}

class Francesinha2 extends Francesinha {
  constructor() {
    super();
    this.speed = 3;
  }
}
