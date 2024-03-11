var it_mascara;
var mascara;
var boneco;
var boneco2;
var fundo;
var boneco_parado;
var boneco2_parado;
var chao;
var chao2;
var solo;
function preload() {
  fundo = loadImage("fundo.png");
  it_mascara = loadImage("item_mascara.png");
  mascara = loadImage("mascara.png");
  boneco = loadImage("persona.png");
  boneco_parado = loadAnimation("persona.png");
  boneco2 = loadImage("persona2.png");
  boneco2_parado = loadAnimation("persona2.png");
  chao = loadImage("chao.png");
  chao2 = loadAnimation("chao.png");
}

function setup() {
  //createCanvas(1000,1000)
  createCanvas(windowWidth, windowHeight);

  boneco = createSprite(100, 30);
  boneco.addAnimation("parado", boneco_parado);

  boneco2 = createSprite(150, 3);
  boneco2.addAnimation("parado", boneco2_parado);

  chao = createSprite(150, 60,300);
  chao.addAnimation("chão2", chao2);
  
  //criação do solo invísivel
  solo = createSprite(150, 72, 300);
  solo.visible = false;

  chao.scale = 5;
} 

function draw() {
  background(0);
  camera.position.x = boneco.x;
  camera.position.y = boneco.position.y - 50;
  camera.zoom = 3;
 
 
 
  boneco2.velocityY = 3;
  boneco2.collide(chao);

  if (keyDown("D")) {
    boneco.x += 5;
  }

  if (keyDown("A")) {
    boneco.x -= 5;
  }
  //no lugar de colidir com o chao, colide com o solo invisível
  boneco.collide(solo); 
  //add gravidade
  boneco.velocityY += 1
  //checa se apertou espaço e se o boneco está tocando no chao
  if (keyDown("SPACE") && boneco.isTouching(chao)) {
    //faz o boneco pular
    boneco.velocityY = -13;
  }
  
  //if (keyDown("W")) {
  //boneco.y -= 5;
  //}

  //if (keyDown("space")) {
  //boneco.y += 5;
  //}

  
  
 
  
  drawSprites();
}

