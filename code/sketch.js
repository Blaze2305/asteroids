let hit;
let s;
let asteroids=[];
let c=0;
let death_nt=3;
let n=5;

function setup(){
  createCanvas(600,600);
  s=new ship();
  for(let i=0;i<n;i++){
    asteroids[i]=new space_rock(floor(random(width)));
  }
}

function draw(){
  background(0)
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

  for(let i=0;i<asteroids.length;i++){
    if(s.check_life_nt(asteroids[i])){
      console.log("YOU LOSE ! WEAK AF! GET REKT BOIIIIIIIIII!");
      noLoop()
    }
  }

  for(let i=0;i<n-c;i++){
    hit=s.check_collision(asteroids[i]);
    if(hit){
      asteroids.splice(i,1);
      c+=1;
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
