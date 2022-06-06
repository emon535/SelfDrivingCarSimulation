class Car {
    constructor ( x, y, width, height){
        this.x = x ;
        this.y = y ;
        this.width = width ;
        this.height =height;
        console.log("inside constructor")
    }
    draw(contex) {
        contex.beginPath();
        contex.rect(
            this.x - this.width/2,
            this.y - this.height/2,
            this.width,
            this.height
        );
        contex.fill();
    }
}