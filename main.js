function preload() {
  bgImage = loadImage("./assets/background.png");
  characterLeftOne = loadImage("./assets/sumo-left.png");
  characterLeftTwo = loadImage("./assets/sumo-left2.png");
  characterLeftJump = loadImage("./assets/sumo-jump-left.png");
  characterRigthOne = loadImage("./assets/sumo-right.png");
  characterRigthTwo = loadImage("./assets/sumo-right2.png");
  characterRightJump = loadImage("./assets/sumo-jump-right.png");
  sB = loadImage("./assets/sb.png");
  forkOne = loadImage("./assets/fork2.png");
  knifeOne = loadImage("./assets/knife1.png");
  forkOneRight = loadImage("./assets/fork2right.png");
  knifeOneRight = loadImage("./assets/knife1right.png");
  francesinhaOne = loadImage("./assets/francesinha2d.png");
  francesinhaBossImg = loadImage("./assets/francesinha-camarao.png");
  sauceImage = loadImage("./assets/sauce2.svg");
  eatItMusic = loadSound("./assets/eatIt.mp3");
  knifeSound = loadSound("./assets/knifeSound.mp3");
  knifeSound2 = loadSound("./assets/knifeSound2.mp3");
  knifeSound3 = loadSound("./assets/knifeSound3.mp3");
  swallowSound = loadSound("./assets/swallow.mp3");
  beerSound = loadSound("./assets/beer.mp3");
  sauceSound = loadSound("./assets/sauce.mp3");
  bossMusic = loadSound("./assets/bossMusic.mp3");
  zipSuperBock = loadSound("./assets/zipCate.m4a");
}

let game = new Game();

function resetGame() {
  game = new Game();
  loop();
}

function setup() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game");
  noLoop();
}

function draw() {
  clear();
  background("cyan");
  game.draw();
}

function keyPressed() {
  if (keyCode === 32 && game.player.jumpCount < 2) {
    game.player.jump();
  }

  if (keyCode === 83) {
    game.shoot();
  }
}

//game start div
const playButton = document.getElementById("playButton");
const gameStartDiv = document.getElementById("gameStart");

playButton.onclick = () => {
  eatItMusic.play();
  gameStartDiv.style.visibility = "hidden";
  resetGame();
};

//game over div
const playAgainButton = document.getElementById("playAgainButton");
const gameOverDiv = document.getElementById("gameOver");

console.log(playAgainButton);
playAgainButton.onclick = () => {
  eatItMusic.stop();
  eatItMusic.play();
  gameOverDiv.style.visibility = "hidden";
  resetGame();
};

//game win div
const playAgainButton2 = document.getElementById("playAgainButton2");
const gameWinDiv = document.getElementById("gameWin");

playAgainButton2.onclick = () => {
  eatItMusic.stop();
  eatItMusic.play();
  gameWinDiv.style.visibility = "hidden";
  resetGame();
};

// music buttons

const stopMusicButton = document.getElementById("stopMusic");
stopMusicButton.onclick = () => {
  eatItMusic.pause();
};

const playMusicButton = document.getElementById("playMusic");
playMusicButton.onclick = () => {
  eatItMusic.stop();
  eatItMusic.play();
};
