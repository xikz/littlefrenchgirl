class Background {
  constructor() {
    this.width = WIDTH;
    this.heigth = HEIGHT;
    this.x = 0;
    this.y = 0;
  }

  draw() {
    image(bgImage, this.x, this.y, this.width, this.heigth);
  }
}
