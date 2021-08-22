/** @type {HTMLCanvasElement} */

function animate(){
    //ctx1.clearRect(0,0, canvas.width , canvas.height);
    ctx3.clearRect(0,0, canvas.width , canvas.height);
    ctx2.drawImage(background_lvl2,0,0, CANVAS_WIDTH,CANVAS_HEIGHT);
    handleParticles();
    frogger.update();
    //handleObstacles();
    frogger.draw();
    //ctx4.drawImage(grass,0,0, CANVAS_WIDTH,CANVAS_HEIGHT);
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

});

function scored(){
    score++;
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height -40;
}


