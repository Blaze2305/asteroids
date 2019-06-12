class space_rock{
  constructor(x){
    this.x=x;
    this.y=0;
    this.speed=2;
  }

  show(){
    push();
    ellipse(this.x,this.y,30,30);
    pop();
  }

  update(){
    this.y+=this.speed;
  }

}
