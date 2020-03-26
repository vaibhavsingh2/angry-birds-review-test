class Pig extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image=loadImage("sprites/enemy.png");
        this.Visibility=250;
    }
    display(){
        if(this.body.speed<3){
            super.display();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility=this.Visibility-5;
            tint(250,this.Visibility);

            image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop();
        }
    }
    score(){
        if(this.Visibility<0 && this.Visibility>-10){
            score++;
        }
    }
}