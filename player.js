class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 40;
    this.height = 80;
    this.gravity = 0.3;
    this.velocity = 0;
    this.jumpCounts = 0;
    this.goingTo = "the right";
    this.health = 500;
    this.image = null;
    this.jumpCount = 0;
    this.powerUp = 0;
  }

  jump() {
    //  remove a value from the velocity so that it emulates the feeling of jumping with already some "force" pulling you down
    this.velocity -= 8;
    this.jumpCount += 1;
  }

  drinkBeer() {
    const powerUp = setInterval(function () {
      game.player.width += 2;
      game.player.height += 4;
      console.log("helo");
    }, 100);
    return powerUp;
  }

  draw() {
    if (!this.image) {
      this.image = characterRigthTwo;
    }

    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > FLOOR - this.height) {
      //  we make sure the player wont go father down than the floor
      this.y = FLOOR - this.height;
      this.velocity = 0;
      this.jumpCount = 0;
    }

    if (this.y < 0) {
      this.y = 0;
    }

    if (this.x < 0) {
      this.x = 0;
    }

    if (this.x > WIDTH - this.width) {
      this.x = WIDTH - this.width;
    }

    if (this.height > 120) {
      clearInterval(this.powerUp);
    }

    image(this.image, this.x, this.y, this.width, this.height);
  }
}
