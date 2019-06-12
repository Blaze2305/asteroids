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

      let d=dist(this.x,this.y,rock.x+15,rock.y+5);
      if(d<30){
        return(true);
      }
      else{
        return(false);
      }
    }
  }

}
