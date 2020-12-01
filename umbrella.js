class Umbrella{

    constructor(x,y){

        var options = {

            isStatic:true

        }
        this.image = loadImage("images/Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.umbrella);

    }
    
    display(){

        fill("blue");
        imageMode(CENTER);
        image(this.image,this.umbrella.position.x,this.umbrella.position.y,this.radius,this.radius);
    }
}