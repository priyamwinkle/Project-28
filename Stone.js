class Stone{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            denstity:1
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body)
        this.image=loadImage("stone.png");
    }
    display(){
        var pos=this.body.position;
        push ();
        translate (pos.x,pos.y)
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        
        pop ();
    }
    


}