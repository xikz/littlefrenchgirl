class Bullet {
  constructor(playerX, playerY, playerGoingTo) {
    this.x = playerX;
    this.y = playerY - 20;
    this.playerGoingTo = playerGoingTo;
    this.xVelocity = 1 + Math.random() * 3;
    this.yVelocity = -3;
    this.gravity = 0.2;
    this.width = 15;
    this.height = 15;
    this.images = [
      {
        imageleft: forkOne,
        imageright: forkOneRight,
        width: 60,
        height: 40,
        sound: knifeSound,
      },
      {
        imageleft: knifeOne,
        imageright: knifeOneRight,
        width: 40,
        height: 40,
        sound: knifeSound3,
      },
    ];
    this.imageSelected = this.imageSelection();
  }

  imageSelection() {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }

  draw() {
    this.width = this.imageSelected.width;
    this.height = this.imageSelected.height;

    if (this.playerGoingTo === "the right") {
      this.x += this.xVelocity;
      this.yVelocity += this.gravity;
      this.y += this.yVelocity;
      image(
        this.imageSelected.imageright,
        this.x,
        this.y,
        this.imageSelected.width,
        this.imageSelected.height
      );
    }

    if (this.playerGoingTo === "the left") {
      this.x -= this.xVelocity;
      this.yVelocity += this.gravity;
      this.y += this.yVelocity;
      image(
        this.imageSelected.imageleft,
        this.x,
        this.y,
        this.imageSelected.width,
        this.imageSelected.height
      );
    }
  }
}
