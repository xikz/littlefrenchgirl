class Game {
  constructor() {
    this.player = new Player();
    this.background = new Background();
    this.bullets = [];
    this.francesinhas = [];
    this.eaten = 0;
    this.kcal = 0;
    this.boss = 0;
    this.bossDefeated = false;
    this.gameOver = false;
    this.level = "low";
  }

  shoot() {
    this.bullets.push(
      new Bullet(this.player.x, this.player.y, this.player.goingTo)
    );
  }

  draw() {
    this.background.draw();
    //eaten
    textSize(15);
    text(`Eaten: ${this.eaten}`, 30, 40);
    //kcal
    if (this.kcal < 90000) {
      rect(30, 50, 60 + this.kcal / 100, 20);
    } else {
      rect(30, 50, 900, 10);
    }
    textSize(10);
    text(`😋 KCal ${this.kcal}`, 35, 63);

    //health
    textSize(10);
    rect(30, 80, this.player.health, 20);
    text(`❤️ ${this.player.health}`, 35, 94);

    this.player.draw();

    if (keyIsDown(39)) {
      this.player.x += 3;
      this.player.goingTo = "the right";
      if (frameCount % 5 === 0) {
        this.player.image = characterRigthTwo;
      }
      if (frameCount % 10 === 0) {
        this.player.image = characterRigthOne;
      }
    }

    if (keyIsDown(37)) {
      this.player.x -= 3;
      this.player.goingTo = "the left";
      if (frameCount % 5 === 0) {
        this.player.image = characterLeftTwo;
      }
      if (frameCount % 10 === 0) {
        this.player.image = characterLeftOne;
      }
    }

    //GAME LEVEL & GAME OVER & GAME WIN

    //game over
    if (this.player.health <= 0) {
      this.gameOver = true;
      this.showGameScore();
      gameOverDiv.style.visibility = "visible";
      noLoop();
    }

    //gameWin
    if (this.boss.health <= 0) {
      this.bossDefeated = true;
      this.level = "there is no blood here - Pure Cholesterol!";
      this.showGameScore();
      gameWinDiv.style.visibility = "visible";
      noLoop();
    }

    //game level
    switch (true) {
      //case this.eaten >= 0 && this.eaten <= 2:
      //  if (frameCount % this.getRandomArbitrary(120, 120) === 0) {
      //    // every 2 seconds, push a new francesinha
      //    this.francesinhas.push(new Francesinha());
      //    this.level = "low";
      //  }
      //  break;
      //case this.eaten > 2 && this.eaten <= 4:
      //  if (frameCount % this.getRandomArbitrary(0, 300) === 0) {
      //    this.francesinhas.push(new Francesinha2());
      //    this.level = "medium";
      //  }
      //  break;

      case this.eaten >= 0 && this.francesinhas.length === 0 && !this.boss:
        this.boss = new FrancesinhaBoss();
        this.level = "high";
        break;
    }

    //PART 3 - FRANCESINHA BOSS
    if (this.boss) {
      this.boss.draw();
    }

    //FRANCESINHAS DRAW

    // draw the francesinha or destroy it if its health goes to 0 or when it leaves the canvas
    this.francesinhas.forEach((francesinha, index) => {
      this.chasePlayer(francesinha, this.player);
      francesinha.draw();
      if (francesinha.x + francesinha.width < 0) {
        this.francesinhas.splice(index, 1);
      }

      if (francesinha.health === 0) {
        this.francesinhas.splice(index, 1);
        this.eaten += 1;
      }
    });

    //Collision - Bullett & Boss

    if (this.boss) {
      this.bullets.forEach((bullet, bulletIndex) => {
        if (this.colisionCheck(bullet, this.boss)) {
          //destroy the bullet when it touches the francesinha
          this.bullets.splice(bulletIndex, 1);
          console.log(this.boss);
          this.boss.health -= 1;
          this.kcal += 633;
        }
      });
    }

    //Collision - Player & Boss Sauce

    if (this.boss) {
      this.boss.attack.forEach((sauce, sauceIndex) => {
        if (this.colisionCheck(this.player, sauce)) {
          //destroy the bullet when it touches the francesinha
          this.boss.attack.splice(sauceIndex, 1);
          this.player.health -= 345;
        }
      });
    }

    //Collision - Bullett & Francesinha
    this.bullets.forEach((bullet, bulletIndex) => {
      this.francesinhas.forEach((francesinha, francesinhaIndex) => {
        if (this.colisionCheck(bullet, francesinha)) {
          console.log("touching");
          //destroy the bullet when it touches the francesinha
          this.bullets.splice(bulletIndex, 1);
          francesinha.health -= 1;
          this.kcal += 633;
        }
      });
    });

    //Collision - Player & Francesinha
    this.francesinhas.forEach((francesinha) => {
      if (this.colisionCheck(francesinha, this.player)) {
        this.player.health -= 1;
      }
    });

    //BULLET DRAW
    this.bullets.forEach((bullet, index) => {
      bullet.draw();
      if (
        bullet.x + bullet.width < 0 ||
        bullet.x > WIDTH ||
        bullet.y > HEIGHT
      ) {
        this.bullets.splice(index, 1);
      }
    });
  }
  chasePlayer(francesinha, player) {
    if (francesinha.x > player.x + player.width) {
      francesinha.x -= francesinha.speed;
    }

    if (francesinha.x + francesinha.width < player.x) {
      francesinha.x += francesinha.speed;
    }

    if (
      francesinha.x < player.x + player.width + 10 &&
      francesinha.x + francesinha.width > player.x - 10
    ) {
      francesinha.x += Math.random() * 3 + Math.random() * -3;
    }
  }

  //colisionCheck(player, sauce) {
  //if(player.y+player.height<sauce.heigth && player.y<sauce.y+sau)
  //}

  colisionCheck(francesinha, bullet) {
    //   player.left + player.width (players.rightSide)
    //  if player's right side is to the left of the obstacle's left
    if (bullet.x + bullet.width < francesinha.x) {
      return false;
    }

    //  obstacle's left and obstacle width (obstacle.rightSide)
    // if obstacle's right side is to the left of player's left
    if (bullet.x > francesinha.x + francesinha.width) {
      return false;
    }

    // player.topSide > obstacle.TopSide + obstacle.height (obstacle.Bottom)
    // player top side is below obstacle's bottom side
    if (bullet.y > francesinha.y + francesinha.height) {
      return false;
    }

    //  obstacle.topSide > player.topSide + player.height (player.bottomSide)
    //  obstacle top side is below the player's bottom side
    if (bullet.y + bullet.height < francesinha.y) {
      return false;
    }
    return true;
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  showGameScore() {
    const eatenPs = document.getElementsByClassName("eaten");

    for (let p of eatenPs) {
      p.innerHTML = `Eaten Francesinhas: ${this.eaten}`;
    }
    const kcalPs = document.getElementsByClassName("kcal");

    for (let p of kcalPs) {
      p.innerHTML = `Ingested kCal: ${this.kcal}`;
    }

    const cholPs = document.getElementsByClassName("chol");

    for (let p of cholPs) {
      p.innerHTML = `Cholesterol Level: ${this.level}`;
    }
  }
}
