/** @type{HTMLCanvasElement} */
// Canvas Setup:
const canvas = document.getElementById("canvas1");
const ctx1 = canvas.getContext("2d");
// canvas1 : particles effects
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height=600;
// canvas2 : logs and turtles
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
canvas2.width = 600;
canvas2.height=600;
// canvas3 : frog
const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");
canvas3.width = 600;
canvas3.height=600;
// canvas4 : cars, grass, trees
const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");
canvas4.width = 600;
canvas4.height=600;
// canvas5 :
const canvas5 = document.getElementById("canvas5");
const ctx5 = canvas5.getContext("2d");
canvas5.width = 600;
canvas5.height=600;

// global variables:
const grid = 80;
let keys = [];
let score = 0;
let collisionsCount = 0;
let frame = 0;
let gameSpeed = 1;
let froge_safe = false;

const particlesArray = [];
const maxParticles = 300;
const maxRipples = 10;
const ripplesArray = [];
const carsArray =[];
const logsArray = [];
// https://t0ny86.github.io/arcade_game-frogger/asset/background.png
//images :
const background_lvl2 = new Image();
// background_lvl2.src = "../asset/background_lvl2.png";
background_lvl2.src = "asset/background_lvl2.png";

const grass = new Image();
// grass.src = "../asset/grass.png";
grass.src = "asset/grass.png";

const collisionImg = new Image();
collisionImg.src = "asset/collisions.png";

const turtle = new Image();
// turtle.src = "../asset/turtles.png";
turtle.src = "asset/turtles.png";

const log = new Image();
// log.src = "../asset/log.png";
log.src = "asset/log.png";

const car = new Image();
// car.src = "../asset/cars.png";
car.src = "asset/cars.png";

let numberOfCars = 3;

const frogSprite = new Image();
// frogSprite.src = "../asset/frog_spritesheet.png";
frogSprite.src = "asset/frog_spritesheet.png";

// sound effects

const jumpSound = new Audio();
jumpSound.src = "asset/jump.wav";