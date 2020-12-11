class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':0.01
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body)
        this.Visibility = 255;
      }
      display(){
        if(this.body.speed<4){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          fill(126, 87, 194);
          rect(0, 0, this.width, this.height);
          pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255,this.Visibility);
          pop();
        }
      }

      score(){
        if (this.Visibility < 0 && this.Visibility > -1005){
          score++;    
        }
      }
}