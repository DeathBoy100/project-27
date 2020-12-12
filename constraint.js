class rope{
    constructor(bodyA,bodyB, offsetx, offsety){
        this.offsetX=offsetx;
        this.offsetY=offsety;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness: 0.06
            
        }
    //this.pointB = pointB    
    this.rope = Constraint.create(options);
    World.add(world,this.rope)
    }

      
    display(){
         
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position   
        line(pointA.x,pointA.y,pointA.x,pointB.y)
     }
    }
