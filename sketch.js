const canvasSize = 500;
const squareCount = 10;
const squareSide = canvasSize / squareCount;

const offsetRange = 2.5;

let textureOne;
let textureTwo;
let textureThree;
let textureFour;

let textureArray;

function preload() {
  textureOne = loadImage ("textures/texture-trans1.png")
  textureTwo = loadImage ("textures/texture-trans2.png")
  textureThree = loadImage ("textures/texture-trans3.png")
  textureFour = loadImage ("textures/texture-trans4.png")
}

function setup() {

  createCanvas(canvasSize, canvasSize);
  
  noLoop();

    // frameRate(1)

  textureArray = [textureOne, textureTwo, textureThree, textureFour];

}

function draw() {

  background(255);

  for(column = 0; column < squareCount; column++) {
    for(row = 0; row < squareCount; row++) {

      const randomTexture = random(textureArray);

      const r = random (0, 255);
      const g = random (0, 255);
      const b = random (0, 255);

      // fill(r, g, b);
      tint(r, g, b);

      const offsetX = random(-offsetRange, offsetRange);
      const offsetY = random(-offsetRange, offsetRange);

      const x = squareSide * column + offsetX;
      const y = squareSide * row + offsetY;

      // noStroke();
      // square (x, y, squareSide);
      image(randomTexture, x, y, squareSide, squareSide)

    }
  }

}

const button = document.getElementById("button")

button.addEventListener("click", function() {
  noLoop();
  redraw();
});