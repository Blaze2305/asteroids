let hit;
let s;
let high_score=0;
let cool_down=0;
let reset;
let score=0;
let asteroids=[];
let c=0;
let death_nt=3;
let n=5;
let heart;

function setup(){
  createCanvas(600,600);
  s=new ship();
  heart= loadImage("../heart.jpg");
  heart.resize(3,3);
  reset=createButton("PRESS TO RESTART");
  reset.mousePressed(renew)
  for(let i=0;i<n;i++){
    asteroids[i]=new space_rock(floor(random(width)));
  }
}

function draw(){
  background(0)

  for(let m=0;m<death_nt;m++){
    push();
    scale(0.1);
    image(heart,20+400*m,20);
    pop();
  }
  // if(keyIsDown(UP_ARROW)){
  //   s.y-=2;
  //   s.y=constrain(s.y,s.side/2, height-s.side/2)
  // }
  // if (keyIsDown(DOWN_ARROW)) {
  //   s.y+=2;
  //   s.y=constrain(s.y,s.side/2, height-s.side/2)
  // }



  if(asteroids.length<n){
    for(let i=0;i<n;i++){
      if(!asteroids[i]){
        asteroids[i]=new space_rock(floor(random(width)))
      }
    }
    c=0;
  }

  if (keyIsDown(LEFT_ARROW)) {
    s.x-=5;
    s.x=constrain(s.x,s.side/2, width-s.side/2)
  }
  if (keyIsDown(RIGHT_ARROW)) {
    s.x+=5;
    s.x=constrain(s.x,s.side/2, width-s.side/2)
  }

  s.show()
  textSize(20)
  stroke(255)
  text("SCORE",300,20);
  text(score,300,50);
  if(high_score<score){
    high_score=score;
  }

  for(let i=0;i<asteroids.length;i++){
    if(s.check_life_nt(asteroids[i])){
      death_nt-=1;
      asteroids.splice(i,1)
      c-=1;
    }
  }
  if(death_nt==0){
    push();
    fill(0);
    stroke(0);
    rect(0,0,100,100)
    pop();
    console.log("YOU LOSE ! WEAK AF! GET REKT BOIIIIIIIIII!");
    console.log("HIGH SCORE==",high_score);
    noLoop()
  }


  for(let i=0;i<asteroids.length;i++){
    hit=s.check_collision(asteroids[i]);
    if(hit){
      asteroids.splice(i,1);
      score+=100;
      // c+=1;
    }
  }

  for(let i=0;i<asteroids.length;i++){
    if(asteroids[i].y>height){
      asteroids.splice(i,1);
    }
  }



  for(let i=0;i<asteroids.length;i++){
    asteroids[i].show();
    asteroids[i].update();
  }
  //
  // if(keyIsDown(32)){
  //   s.shoot();
  //   // for(let i=0;i<100000000;i++){}
  // }
}


function keyPressed(){
  if(keyCode===32){
    s.shoot();
  }
}



function renew(){
  for(let i=0;i<n;i++){
    asteroids[i]=new space_rock(floor(random(width)));
  }
  s=new ship();
  death_nt=3;
  score=0;
  loop();
}
