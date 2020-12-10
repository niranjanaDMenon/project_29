class Stone {
    constructor(x, y, r) {
      var options = {
   //       isStatic: flase,
          restitution: 0,
          friction: 1,
          density:1.2
      }
      this.r = r;
      this.body = Bodies.circle(x, y, this.r/2, options);
      
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x, pos.y)
   //   rotate(this.body.angle);
      imageMode(CENTER)
      image(this.image,0, 0, this.r, this.r);
      pop()
    }
  };
