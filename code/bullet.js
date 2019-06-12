class rocket{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.speed=5;
  }

  update(){
    this.y-=this.speed;
  }
  
}
