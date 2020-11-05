function preload() {
  bgImage = loadImage("./assets/background.png");
  characterLeftOne = loadImage("./assets/sumo-left.png");
  characterLeftTwo = loadImage("./assets/sumo-left2.png");
  characterRigthOne = loadImage("./assets/sumo-right.png");
  characterRigthTwo = loadImage("./assets/sumo-right2.png");
  forkOne = loadImage("./assets/fork2.png");
  knifeOne = loadImage("./assets/knife1.png");
  francesinhaOne = loadImage("./assets/francesinha2d.png");
  francesinhaBossImg = loadImage("./assets/francesinha-camarao.png");
  sauceImage = loadImage("./assets/sauce2.svg");
  eatItMusic = loadSound("./assets/eatIt.mp3");
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
  if (keyCode === 32) {
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
  eatItMusic.stop();
};

const playMusicButton = document.getElementById("playMusic");
playMusicButton.onclick = () => {
  eatItMusic.stop();
  eatItMusic.play();
};
