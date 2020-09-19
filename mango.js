class Mango {
    constructor(x,y){
        var options = {
            restitution: 2
        }
    this.body = Bodies.rectangle(x,y);
    this.image = loadImage("mango.png");
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
        
      }
    }
