let s;
let asteroids=[];
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
  if (keyIsDown(LEFT_ARROW)) {
    s.x-=5;
    s.x=constrain(s.x,s.side/2, width-s.side/2)
  }
  if (keyIsDown(RIGHT_ARROW)) {
    s.x+=5;
    s.x=constrain(s.x,s.side/2, width-s.side/2)
  }

  for(let i=0;i<n;i++){
    asteroids[i].show();
    asteroids[i].update();
  }
  s.show()
}


function keyPressed(){
  if(keyCode===32){
    s.shoot();
  }
}
