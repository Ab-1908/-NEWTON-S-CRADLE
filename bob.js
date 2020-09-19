class Bob{
    constructor(x, y, width, height){

        var options = {
          retitution: 0.3, 
          firction: 0.5, 
          density: 1.2

        }
        this.body = Bodies.rectangle(x, y. width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
  
    display(){
     var pos = this.body.position;
     rectMode(CENTER);
     rect(pos.x, pos.y, this.width, this.height);


}


}


