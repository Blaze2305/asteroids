class ship{
  constructor(){
    this.x=width/2;
    this.y=height-20;
    this.side=30;
    this.side_slant=this.side*sin(PI/3);
    this.bullets=[];
  }

  show(){
    push();
    translate(this.x,this.y);
    triangle(0,-this.side_slant/2,this.side/2,this.side_slant/2,-this.side/2,this.side_slant/2);
    pop();

    push();
    for(let i=0;i<this.bullets.length;i++){
      stroke(255,0,0)
      fill(255)
      this.bullets[i].update()
      ellipse(this.bullets[i].x,this.bullets[i].y,20);
      if(this.bullets[0].y<0){
        this.bullets.shift()
      }
    }
    pop();
  }

  shoot(){
    push();
    let a=new rocket(this.x,this.y);
    this.bullets.push(a);
    pop();
  }

  check_collision(rock){
    for(let i=0;i<this.bullets.length;i++){
        if(this.bullets[i].check(rock)){
          this.bullets.splice(i,1);
          return(1);
          break;
      }
    }

  }



  check_life_nt(rock){
    let d=dist(rock.x+15,rock.y+5,this.x,this.y);
    if(d<14){
      return(true);
    }
    else{
      return(false);
    }
  }
}
