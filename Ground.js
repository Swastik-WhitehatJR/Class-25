class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/base.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image,0, 0,this.width, this.height);
      pop();
    }
  };