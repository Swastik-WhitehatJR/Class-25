class Log extends BaseClass{
    constructor(x, y, height, angle) {
      super(x,y,20,height,angle);
      this.image = loadImage("sprites/wood1.png");
      Matter.Body.setAngle(this.body,angle);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      super.display();

    }
  };
  