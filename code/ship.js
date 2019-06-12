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
    rect(this.side/2-2,-this.side_slant/2+8,2,17);
    rect(-this.side/2-2,-this.side_slant/2+8,2,17);    
    triangle(0,-this.side_slant/2,this.side/2,this.side_slant/2,-this.side/2,this.side_slant/2);
    pop();

    push();
    for(let i=0;i<this.bullets.length;i++){
      stroke(255,0,0)
      fill(255,0,0)
      this.bullets[i].update()
      rectMode(CENTER);
      rect(this.bullets[i].x,this.bullets[i].y,2,20)
      // ellipse(this.bullets[i].x,this.bullets[i].y,20);
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
    let d=dist(rock.x,rock.y,this.x,this.y);
    // stroke(255);
    // line(this.x,this.y,rock.x,rock.y)
    if(d<14){
      return(true);
    }
    else{
      return(false);
    }
  }
}
