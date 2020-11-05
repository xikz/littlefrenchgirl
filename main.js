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
}

let game = new Game();

function resetGame() {
  game = new Game();
  loop();
}

function setup() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game");
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

const playButton = document.getElementById("playButton");
const gameStartDiv = document.getElementById("gameStart");
const gameEndDiv = document.getElementById("gameEnd");

playButton.onclick = () => {
  gameStartDiv.style.visibility = "hidden";
  resetGame();
};

playAgain.onclick = () => {};

console.log(playAgain);
