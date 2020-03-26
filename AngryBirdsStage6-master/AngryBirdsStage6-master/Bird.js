class Bird extends BaseClass{
constructor(x,y){
super(x,y,50,50);
this.image=loadImage("sprites/bird.png");
this.smokeImage=loadImage("sprites/smoke.png")
this.trajectory=[];
}

display(){

//this.body.positionX=World.mouseX;
//this.body.positionY=World.mouseY;


  super.display();






for(var i=0; i<this.trajectory.length; i++){
    image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
  }




}















}