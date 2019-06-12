class rocket{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.speed=5;
  }

  update(){
    this.y-=this.speed;
  }

  check(rock){
    if(rock){
      let d=dist(this.x,this.y,rock.x,rock.y);
      if(d<15){
        return(true);
      }
      else{
        return(false);
      }
    }
  }

}
