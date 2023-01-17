
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;


function setup() {
    //Crie um canva com 400 de lagura e altura
  ???

  engine = Engine.create();
  world = engine.world;
  
  //Crie a variável 'ball_options', pois ela guarda algumas propriedades da bola
   ???? = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  //Você precisa deixar o chão estático, para isso utilize o código 'isStatic' e deixe verdadeiro
   var ground_options ={
     ???
   };
  
   //Nesse momento, você precisa definir algumas características para o botão
   //Abaixo utilize 'createImg' para que uma imagem seja adicionada
  btn2 = ???('up.png');
  //Utilize 'position' para definir a posição
  btn2.???(350,30);
  //Defina o tamanho do botão para 50 de largura e 50 de altura
  //Dica: para fazer a instrução acima, basta utilizar a mesma estrutura que você usou para definir a posição
  btn2.size(50,50);
  //Quando o mouse for clicado, acontecerá a função 'vForce'. Para isso, use o código 'mouseClicked'
  btn2.???(vForce);

  //Defina as seguintes características para o ground1:
  //eixo x: 100
  //eixo y: 300
  //largura: 100
  //altura:20
  ground1 = Bodies.rectangle(???,???,???,???,ground_options);
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  //Utilize 'rotate' paa o seu retângulo, possuir uma rotação
  Matter.Body.???(ground1,angle)
 push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;

 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  