class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,100,100);
    this.image = loadImage("sprites/ball.png");
    this.visibilty=255
  }
  display(){
    console.log(this.body.speed)
      
      
      
      
      if(this.body.speed<3){
        
      
      
      
      
      
      super.display()
      
      }
      else{
        World.remove(world,this.body)
        push();
        this.visibilty=this.visibilty-5
        tint(255, this.visibilty); 
        image(this.image,this.body.position.x,this.body.position.y,50,50)
       pop();
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
  }

};