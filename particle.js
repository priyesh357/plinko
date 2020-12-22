class particle {
    constructor(x,y,r) {
      var options = {
          restitution:0.4 
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r=r
      this.color=color(random(0,255),random(0,255),random(0,255))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(0,0,this.r,this.r);
     pop()
    }
  };
