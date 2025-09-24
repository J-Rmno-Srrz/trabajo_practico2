let x, i, y, a, b, azul, fondo, frente, speech, link, font, video, wX, wY, s, audio;
let playing = false;
let labubu = [17];
let shein = [5];
let stan = [20];
let boton = [1];
let ubiX = [3];
let ubiY = [3];
let mostrar = true;
const message = "text";
let pantalla = 0;
let scriptBlocks = [
  "100 REM ANSIEDAD EXPRESS. EN tu carrito online AGREGA 12 remeras iguales en distinto color. ACTUALIZA la app: la oferta ya terminó. PAGA envío express que tardará 3 meses.",
  "200 REM MICRO-TENDENCIA FLASH. LEE “esta prenda es indispensable por las próximas 48 horas”. ESCUCHA a la influencer gritar ¡lo NECESITÁS, bestie! SIENTE el vacío existencial en 12 cuotas sin interés.",
  "300 REM CONSUMO LABUBU. CORRÉ a la fila para comprar un muñeco exclusivo. PAGA reventa al triple porque ya está agotado. OBSERVA cómo tu Labubu se devalúa en dos semanas.",
  "400 REM INSPIRACIÓN TÓXICA. SUEÑA con un armario cápsula minimalista. DESPIERTA con 15 paquetes en la puerta. OBSERVA que ninguno combina. PROYECTA tu look coherente directo al vertedero.",
  "500 REM CONSUMO STANLEY. COMPRA el vaso que mantiene frío 12 horas. PUBLICA stories: sin mi Stanley no soy yo. JÚNTALO con otros 4 iguales en diferentes colores. REM descubre que el termo viejo hacía lo mismo.",
  "900 REM CONSUMO CÍCLICO. IF vacío? GOTO 200. IF hypeado? GOTO 300. IF minimalista frustrado? GOTO 400. IF sediento de status? GOTO 500. SIENTE que nada alcanza, vuelve a comprar. RETURN.",
];
let index = 0;

const link1 = "~L1NnNnNd2~";
const link2 = "#u71lL";
const link3 = "50qQu373!";
const link4 = "%r34L";
let messageX;
let messageY;

//wY= (windowHeight/2)-200;
//wX= (windowWidth/2)-200;


function preload() {
  for (let i = 0; i < 18; i += 1) {
    labubu[i] = loadImage("imagenes/labubu_" + i + ".png");
  }
  for (let i = 0; i < 21; i += 1) {
    stan[i] = loadImage("imagenes/stanley_" + i + ".png");
  }
  for (let i = 0; i < 5; i += 1) {
    shein[i] = loadImage("imagenes/shein_" + i + ".png");
  }
  
  boton[0] = loadImage("imagenes/compraya_1.png");
  boton[1] = loadImage("imagenes/compraya_2.png");
  
  //audio= loadSound("/Fake plastic trees.mp3");

  font = loadFont('/Tiny5-Regular.ttf');
  
}

function setup() {
  wY= (windowHeight/2)-200;
  wX= (windowWidth/2)-200;
  createCanvas(windowWidth, windowHeight);
  fondo = createGraphics(windowWidth, windowHeight);
  medio1 = createGraphics(windowWidth, windowHeight);
  medio2 = createGraphics(windowWidth, windowHeight);
  medio3 = createGraphics(windowWidth, windowHeight);
  medio4 = createGraphics(windowWidth, windowHeight);
  fo = createGraphics(windowWidth, windowHeight);
  fre = createGraphics(windowWidth, windowHeight);
  frente = createGraphics(windowWidth, windowHeight);
  speech = new p5.Speech();
  speech.setVoice("Microsoft Elena - Spanish (Argentina)"); // 👈 voz Elena
  speech.setRate(2); // 👈 más rápido
  //frameRate(5);
  video = createVideo(['/tp2 video.mp4']);
  video.hide();
}

function draw() {
  //audio.play();
  //pantalla links
  if (pantalla == 0) {
    pantallaLinks();
  }
  //pantalla productos
  if (pantalla == 1) {
    pantallaLabubu();
  }
  if (pantalla == 2) {
    pantallaStanley();
  }
  if (pantalla == 3) {
    pantallaShein();
  }
    if (pantalla == 4) {
    pantallaVideo();
  }
}

function pantallaLabubu() {
  speech.speak(scriptBlocks[2]);

  mostrar = false;
  i = frameCount % 17;
  a = random(-40, windowWidth);
  b = random(-40, windowHeight);

  azul = (255/windowWidth)*mouseX;
  //fondo.ellipse(random(400),random(400),30,30);
    fondo.text("PRESS Z", a, b);
  fondo.image(labubu[i], a, b, 100, 100);
  if (frameCount % 7 == 0) {
    frente.clear();
    frente.image(labubu[i], wX, wY, 400, 400);
  }

  //fondo rojo
  background(247, 77, 197);
  //dibujo la textura de fondo
  push();
  tint(225, azul, azul);
  image(fondo, 0, 0);
  pop();
  //dibujo las figuras del frente
  image(frente, 0, 0);

  if (keyIsDown(90) === true) {
    pantalla = 0;
  }
}

function pantallaStanley() {
   speech.speak(scriptBlocks[4]);
  mostrar = false;
  i = frameCount % 20;
  a = random(-40, windowWidth);
  b = random(-40, windowHeight);

  azul = (255/windowWidth)*mouseX;
  //fondo.ellipse(random(400),random(400),30,30);
    fondo.text("PRESS Z", a, b);
  fondo.image(stan[i], a, b, 100, 100);
  if (frameCount % 7 == 0) {
    frente.clear();
    frente.image(stan[i], wX, wY, 400, 400);
  }

  //fondo rojo
  background(247, 77, 197);
  //dibujo la textura de fondo
  push();
  tint(225, azul, azul);
  image(fondo, 0, 0);
  pop();
  //dibujo las figuras del frente
  image(frente, 0, 0);

  if (keyIsDown(90) === true) {
    pantalla = 0;
  }
}

function pantallaShein() {
  speech.speak(scriptBlocks[0]);
  mostrar = false;
  i = frameCount % 5;
  a = random(-40, windowWidth);
  b = random(-40, windowHeight);

  azul = (255/windowWidth)*mouseX;
  //fondo.ellipse(random(400),random(400),30,30);
  fondo.text("PRESS Z", a, b);
  fondo.image(stan[i], a, b, 100, 100);
  if (frameCount % 7 == 0) {
    frente.clear();
    frente.image(shein[i], wX, wY, 400, 400);
  }

  //fondo rojo
  background(247, 77, 197);
  //dibujo la textura de fondo
  push();
  tint(225, azul, azul);
  image(fondo, 0, 0);
  pop();
  //dibujo las figuras del frente
  image(frente, 0, 0);

  if (keyIsDown(90) === true) {
    pantalla = 0;
  }
}

function pantallaVideo(){
  background(247, 77, 197);
  image(video,0, 0,width, height);
  
if (keyIsDown(90) === true) {
    video.pause();
    pantalla = 0;
  }
}

function pantallaLinks() {
speech.speak(scriptBlocks[5]);
  //lo q tiene la pantalla de carga
  background(247, 77, 197);
  i= frameCount % 2;
  
  medio1.textFont(font);
  medio2.textFont(font);
  medio3.textFont(font);
  medio4.textFont(font);

  medio1.textSize(30);
  medio2.textSize(30);
  medio3.textSize(30);
  medio4.textSize(30);

  if (isMouseInsideText(link1, wX-100, wY-50)) {
    cursor(HAND);
    medio1.fill(0, 200, 255);
    medio1.stroke(0, 200, 255);
  } else if (isMouseInsideText(link2,  wX+230, wY+450)) {
    cursor(HAND);
    medio2.fill(0, 200, 255);
    medio2.stroke(0, 200, 255);
  } else if (isMouseInsideText(link3, wX+332, wY+102)) {
    cursor(HAND);
    medio3.fill(0, 200, 255);
    medio3.stroke(0, 200, 255);
  } else if (isMouseInsideText(link4, wX, wY+272)) {
    cursor(HAND);
    medio4.fill(0, 200, 255);
    medio4.stroke(0, 200, 255);
  } else {
    cursor(ARROW);
    medio1.fill(255);
    medio1.stroke(255);
      medio2.fill(255);
    medio2.stroke(255);
      medio3.fill(255);
    medio3.stroke(255);
      medio4.fill(255);
    medio4.stroke(255);}
  
  fo.textFont(font);
  fo.textSize(15);
  fo.fill(250, 250, 250);

  for (let o = 5; o < windowWidth; o += 45) {
    // Loop from the top to the bottom.
    for (let p = 5; p < windowHeight; p += 15) {
      fo.text("#NEW", o, p);
    }
  }

  medio1.text(link1, wX-100, wY-50);
  medio2.text(link2,  wX+230, wY+450);
  medio3.text(link3, wX+332, wY+102);
  medio4.text(link4, wX, wY+272);

  //Boton del centro
  if (frameCount % 3 == 0) {
    fre.image(boton[i],wX, wY, 400, 400);
  }
  image(fo, 0, 0);
  image(medio1, 0, 0);
  image(medio2, 0, 0);
  image(medio3, 0, 0);
  image(medio4, 0, 0);
  image(fre, 0, 0);
}

function mouseClicked() {
  if (isMouseInsideText(link1, wX-100, wY-50)) {
    pantalla = 1;
  }
  if (isMouseInsideText(link2,  wX+230, wY+450)) {
    pantalla = 2;
  }
  if (isMouseInsideText(link3, wX+332, wY+102)) {
    pantalla = 3;
  }
  if (isMouseInsideText(link4, wX, wY+272)) {
    pantalla = 4;
    video.loop();
  }
}

function isMouseInsideText(link, messageX, messageY) {
  const messageWidth = textWidth(link);
  const messageTop = messageY - textAscent();
  const messageBottom = messageY + textDescent();

  return (
    mouseX > messageX &&
    mouseX < messageX + messageWidth &&
    mouseY > messageTop &&
    mouseY < messageBottom
  );
}
/*
function readNextBlock() {
  if (index < scriptBlocks.length) {
    speech.speak(scriptBlocks[index]);
    index++;
    setTimeout(readNextBlock, 2500); // pausa corta entre bloques (ajustable)
  }
}*/
