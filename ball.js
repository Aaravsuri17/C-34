class Ball {
    constructor(x,y,width,height) {
      var options = {
          "restitution":0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x, pos.y)
      rotate(this.body.angle)
      fill("yellow");
      ellipse(0,0, this.width, this.height);
      pop()
    }
  };