// global variables
console.log("game initialized");


// CLONE REPOSITORY IN DESKTOP APP FOR GIT, CLONE IN CORRECT FILE - REMEMBER TO MOVE CSS, JS, 
// HTML FILES INTO CREATED FOLDER FOR MY-GAME

// creates a variable called canvas that holds the HTML document element
// the canvas allows us to draw things on the HTML document page
// heck out the MDN reference here for more info https://developer.mozilla.org
let canvas = null;
let ctx = null;

// the CanvasRenderingCOntext2D interface, part of the Canvas API, allow
// You can use it to create shpae,s text, images, and other objects.
// here we assign the context to ctx, which is a shorthand way of access
function init() {
    canvas = document.createElement("canvas");
    ctx = canvas.getContext('2d');
    // Here we append the body of the HTML document, which adds the canvas to it
    document.body.appendChild(canvas);
    gameLoop();
}
// Using the CanvasRenderingContext2D we have access to draw and fill commands

let Square = function (x, y, w, h){
    this.x = x;2
    this.y = y;
    this.w = w;
    this.h = h;
    // this.update = function (){
        // this.x += 5;
        // }
        this.draw = function () {
            ctx.fillStyle = 'rgb(200, 0, 0)';
            ctx.fillRect(this.x, this.y, this.w, this.h);
        };
}

let spongebob = new Square(10, 10, 50, 50);
// establishes new shape with specific dimensions

function draw() {
    spongebob.draw();
}
// draws spongebob created shape

function gameLoop() {
    console.log('the game loop is alive!!!');
    update();
    draw();
    window.requestAnimationFrame(gameLoop);
}
// creates function to continuously draw created-shape across screen