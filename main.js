const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = 400;

const contex = canvas.getContext("2d")
const car = new Car(200,200,30,50)

car.draw(contex);