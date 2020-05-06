class Log extends BaseClass{
  constructor(x,y,height,angle){
    
    super(x,y,20,height,angle);
    this.body.shapeColor=color("#885B31")
   
   
    Matter.Body.setAngle(this.body, angle);
  }
}