class Bob{
    constructor(x,y,radius){
        var options={ 
        restitution:1, 
        friction:0,
         density:0.8
         }
    this.radius = radius/2
    this.body=Bodies.circle(x,y,this.radius,options) 
    //this.radius=radius;
    //this.body=Bodies.circle(x,y,50,options)
    
    this.radius=50
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    ellipseMode(CENTER);
    fill("pink")
    translate(pos.x,pos.y)
    rotate(angle)
    ellipse(0,0,this.radius,this.radius)
    pop()
    }
    
    }
   