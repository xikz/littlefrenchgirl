class FrancesinhaBoss {
  constructor() {
    this.health = 20;
    this.x = WIDTH;
    this.y = FLOOR + 20;
    this.width = 250;
    this.height = 250;
    this.speed = 1;
    this.attack = [];
    this.endEntrance = false;
  }

  randomAttack() {
    for (let i = 0; i < 1; i++) {
      this.attack.push(new Sauce(this.x, this.y + 140));
    }
  }

  draw() {
    this.attack.forEach((sauce, sauceIdex) => {
      sauce.draw();
      if (sauce.x + sauce.width < 0) {
        this.attack.splice(sauceIdex, 1);
      }
    });

    if (frameCount % 120 === 0 && this.x < WIDTH - this.width) {
      this.randomAttack();
      sauceSound.play();
      this.endEntrance = true;
    }

    if (this.x + this.width > WIDTH - 20) {
      this.x -= 0.5;
    }

    this.y = FLOOR + 20 - this.height;

    image(francesinhaBossImg, this.x, this.y, this.width, this.height);
  }
}
