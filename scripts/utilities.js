/** @type {HTMLCanvasElement} */

function animate(){
    ctx1.clearRect(0,0, canvas.width , canvas.height);
    ctx2.clearRect(0,0, canvas.width , canvas.height);
    ctx3.clearRect(0,0, canvas.width , canvas.height);
    ctx4.clearRect(0,0, canvas.width , canvas.height);

    handleRipples()
    ctx2.drawImage(background_lvl2,0,0, CANVAS_WIDTH,CANVAS_HEIGHT);
    handleParticles();
    frogger.update();
    frogger.draw();
    handleObstacles();
    //ctx4.drawImage(grass,0,0, CANVAS_WIDTH,CANVAS_HEIGHT);
    handleScoreBoard();
    frame++;
    requestAnimationFrame(animate);
}


// Start :
animate();

// event listeners:
window.addEventListener("keydown", (e)=>{
keys = [];
keys[e.code] = true;
if(keys["ArrowLeft"] 
    || keys["ArrowRight"]
    || keys["ArrowUp"] 
    || keys["ArrowDown"]){
    frogger.jump();
}
});

window.addEventListener("keyup", (e)=>{
    delete keys[e.code];
    frogger.moving = false;
    frogger.frameX = 0;
});

function scored(){
    score++;
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height -40;
}

function handleScoreBoard(){
    ctx4.fillStyle = "black";
    ctx4.strokeStyle = "black";
    ctx4.font = "15px Verdana";
    ctx4.strokeText("Score: ", 265,15);
    
    ctx4.strokeText("Collision: "+ collisionsCount , 10,175);
    ctx4.strokeText("Game Speed: "+ gameSpeed.toFixed(1), 10,195);

    ctx4.font = "60px Verdana";
    ctx4.fillText(score, 270,65);
}

// collison detection between two rectangles

function collision(first , second) {
    return !( first.x > second.x + second.width
        || first.x + first.width < second.x
        || first.y > second.y + second.height
        || first.y + first.height < second.y);
}

function resetGame(){
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height -40;
    score = 0;
    collisionsCount++;
    gameSpeed= 1;
}
// function collision(first , second) {
//     return ( 
//         first.x + first.width < second.x + second.width
//         )
        
//     }