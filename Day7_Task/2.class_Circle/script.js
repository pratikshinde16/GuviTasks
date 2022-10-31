class circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
        if(radius==undefined){
            this.radius=1.0;

        }
        if(color==undefined){
            this.color = "red"
        }
    }
    toString(){
        console.log(`Radius is ${this.radius} and color is ${this.color}`)
    }
    getRadius(){
        console.log(this.radius)
    }
    setRadius(radius){
        this.radius = radius
    }
    getColor(){
        console.log(this.color)
    }
    setColor(color){
        this.color = color
    }
    getArea(){
        var p = Math.PI;
        var area = p * this.radius*this.radius;
        console.log(area.toFixed(2))
    }
    getCircumference(){
        var p = Math.PI;
        var circumference = 2*p*this.radius;
        console.log(circumference.toFixed(2))
    }
}
var c1 = new circle()
c1.toString();

var c2 = new circle(5.2);
c2.toString();

var c3 = new circle(3.5,"black");
c3.toString()

var c4 = new circle(6.1);
c4.getRadius();

var c5 = new circle(1.2)
c5.setRadius(3.8);
c5.getRadius();

var c6 = new circle("pink");

c6.setColor("pink");
c6.getColor();


var c7 = new circle(5);
c7.getArea();
c7.getCircumference();
