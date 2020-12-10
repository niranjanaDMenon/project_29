class Sling {

    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.003,
            length: 1
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
      }
      fly(){
        this.chain.bodyA = null;
      }
      attach(body){
        this.chain.bodyA=body;
      }
      display(){
        if (this.chain.bodyA){
        var posA =this.chain.bodyA.position;
        var posB = this.pointB;
        line(posA.x,posA.y,posB.x,posB.y);
      }
    }

}