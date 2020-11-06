class Superbock {
  constructor() {
    this.x = -30;
    this.y = FLOOR;
    this.width = 30;
    this.height = 100;
  }

  draw() {
    this.y = FLOOR - this.height;

    if (this.x < 0) {
      this.x += 1;
    }

    image(sB, this.x, this.y, this.width, this.height);
  }
}
