var arco , flecha,  planoFundo;
var imagemArco, imagemFlecha, imagem_balaoVerde, imagem_balaoVermelho, imagem_balaoRosa ,imagem_balaoAzul, imagemPlanoFundo;

function preload(){
  
  imagemPlanoFundo = loadImage("background0.png");
  imagemFlecha = loadImage("arrow0.png");
  imagemArco = loadImage("bow0.png");
  imagem_balaoVermelho = loadImage("red_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //criando plano de fundo background
  cenario = createSprite(0,0,400,400);
  cenario.addImage(imagemPlanoFundo);
  cenario.scale = 2.5
  
  // criando arco para lançar a fecha
  arco = createSprite(380,220,20,50);
  arco.addImage(imagemArco); 
  arco.scale = 1;
  
}

function draw() {
 background(0);
  // movendo o solo
    cenario.velocityX = -3 

    if (cenario.x < 0){
      cenario.x = cenario.width/2;
    }
  
  //movendo o arco
  arco.y = World.mouseY
  
   // lançar flecha quando tecla de espaço é pressionada
  if (keyDown("space")) {
    criarFlecha();
    
  }
  
  //criando balões contínuos
  var selecionar_balao = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (selecionar_balao == 1) {
      balaoVermelho();
    }
  }
  
  drawSprites();
}


// Criando flechas para o arco
 function criarFlecha() {
  var arrow= createSprite(100, 100, 60, 10);
  flecha.addImage(arrowImage);
  flecha.x = 360;
  flecha.y=arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
}


function balaoVermelho() {
  var vermelho = createSprite(0,Math.round(random(20, 370)), 10, 10);
  vermelho.addImage(imagem_balaoVermelho);
  vermelho.velocityX = 3;
  vermelho.lifetime = 150;
  vermelho.scale = 0.1;

}

function balaoAzul() {
  //escreva o código para gerar os balões azuis
}

function balaoVerde() {
  //escreva o código para gerar os balões verdes
}

function balaoRosa() {
  //escreva o código para gerar os balões cor-de-rosa
}
