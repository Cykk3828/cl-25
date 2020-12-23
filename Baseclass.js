class Baseclass{
    constructor(x,y,width,height){
        var options={
            restitution:1,
            'friction' :2.0,
            'density' :1.0
        }
        
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/bird.png");
          World.add(world,this.body);
    }
    display(){
       
      push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill(255);
        strokeWeight(5);
        stroke("red");
       imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
      pop();
      
  
        
    }    
    
      
  }