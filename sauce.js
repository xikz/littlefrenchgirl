class Sauce {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.heigth = 50;
  }

  draw() {
    this.x -= 4;
    image(sauceImage, this.x, this.y, this.width, this.heigth);
  }
}
