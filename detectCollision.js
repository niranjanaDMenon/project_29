function detectCollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 // console.log(distance);
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
   {
       
      	  Matter.Body.setStatic(lmango.body,false);
    }

  }