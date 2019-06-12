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


}
