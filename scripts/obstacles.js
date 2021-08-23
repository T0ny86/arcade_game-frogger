/** @type {HTMLCanvasElement} */

class Obstacle{
    constructor(x,y,width,height,speed,type){
        this.x  =   x;
        this.y  =   y;
        this.width  = width;
        this.height = height;
        this.speed  = speed;
        this.type   = type;
        this.frameX = 0;
        this.frameY = 0;
        this.randomize = Math.floor(Math.random()* 30 + 30);
        this.carType = Math.floor(Math.random() * numberOfCars); // numberOfCars = 3
    }
    update(){
        this.x += this.speed * gameSpeed;
        if(this.speed > 0){
            // positive speed value = moving to right
            if(this.x > canvas.width + this.width){
                this.x = 0 - this.width;
                this.carType = Math.floor(Math.random() * numberOfCars); // numberOfCars = 3
            }
        }else{
            this.frameX = 1;
            // negative speed value = moving to left
            if(this.x < 0 - this.width){
                this.x = canvas.width + this.width;
                this.carType = Math.floor(Math.random() * numberOfCars); // numberOfCars = 3
            }
        }
    }
    draw(){
        if(this.type === "turtle"){ // W:140 x H:280
            if(frame % this.randomize === 0){
                this.frameX >= 1 ? this.frameX = 0 : this.frameX++;
            }    
            ctx1.drawImage(turtle,
                this.frameX*70, this.frameY*70,70,70,
                this.x, this.y, this.width, this.height);    
        } else if(this.type === "log"){
            ctx1.drawImage(log,
                this.x, this.y, this.width, this.height);
        } else{
            ctx2.drawImage(car,
                this.frameX * this.width, this.carType * this.height , grid * 2, grid,
                this.x, this.y, this.width, this.height);
        }
    }
}

function initObstacles(){
    //lane 1
    for(let i= 0; i < 2; i++){
        let x = i * 350;
        carsArray.push(new 
            Obstacle(x, 
                canvas.height - grid * 2 - 20,
                 grid * 2 ,grid, 1, 'car'));
    }
    //lane 2
    for(let i= 0; i < 2; i++){
        let x = i * 300;
        carsArray.push(new 
            Obstacle(x,
                canvas.height - grid * 3 - 20,
                 grid * 2 ,grid, -2, 'car'));
    }
    //lane 3
    for(let i= 0; i < 2; i++){
        let x = i * 400;
        carsArray.push(new 
            Obstacle(x,
                canvas.height - grid * 4 - 20,
                 grid * 2 ,grid, 2, 'car'));
    }
    //lane 4
    for(let i= 0; i < 2; i++){
        let x = i * 400;
        logsArray.push(new 
            Obstacle(x,
                canvas.height - grid * 5 - 20,
                 grid * 2 ,grid, -2, 'log'));
    }
    //lane 5
    for(let i= 0; i < 3; i++){
        let x = i * 200;
        logsArray.push(new 
            Obstacle(x,
                canvas.height - grid * 6 - 20,
                 grid  ,grid, 1, 'turtle'));
    }
}

function handleObstacles(){
    for(let i =0; i < carsArray.length; i++){
        carsArray[i].update();
        carsArray[i].draw();
    }
    for(let i =0; i < logsArray.length; i++){
        logsArray[i].update();
        logsArray[i].draw();
    }
    // collision detection with cars
    for(let i=0; i < carsArray.length; i++){
        if(collision(frogger, carsArray[i])){
            ctx4.drawImage(collisionImg,0,100,100,100,
                frogger.x, frogger.y ,50, 50);
                resetGame();
        }
    }

    // collision with logs/turtles:
    if(frogger.y < 250 && frogger.y > 100){
        froge_safe = false;
        for (let i = 0; i < logsArray.length; i++) {
            if(collision(frogger,logsArray[i])){
                frogger.x +=logsArray[i].speed;
                froge_safe = true;
            }
        }
        if(!froge_safe) {
            for (let i = 0; i < 20; i++) {
                ripplesArray.unshift(new Particle(frogger.x, frogger.y));
            }
            resetGame();}
    }
}

// starts:

initObstacles();


