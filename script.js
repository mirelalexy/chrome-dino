const world = document.querySelector(".world");
// set ratio for world: 100 : 30
const worldWidth = 100;
const worldHeight = 30;

scaleWorld();
// scale world every time window is resized
window.addEventListener("resize", scaleWorld);

// game loop
window.requestAnimationFrame(update);

let lastTime;


function scaleWorld() {
    // calculate using the ratio set
    // window.innerWidth / window.innerHeight calculates the aspect ratio of the browser window, while worldWidth / worldHeight calculates the aspect ratio of the game world
    // if the if statement is true, then it means the window is more narrow than the world, so we use the width as a limiting factor
    let scaleWorldByRatio;
    if(window.innerWidth / window.innerHeight < worldWidth / worldHeight) {
        scaleWorldByRatio = window.innerWidth / worldWidth;
    } else {
    // otherwise, we use the height as a limiting factor
        scaleWorldByRatio = window.innerHeight / worldHeight;
    }

    // change world width and height dinamically to maintain the set ratio, 100 : 30
    world.style.width = `${worldWidth * scaleWorldByRatio}px`;
    world.style.height = `${worldHeight * scaleWorldByRatio}px`;
}

function update(time) {
    if (lastTime == null){ // user has not started the game
        lastTime = time;
        window.requestAnimationFrame(update); // schedule next update
        return;
    }
    // delta represents the time between frames (ensures the game objects are moving smoothly)
    const delta = time - lastTime;
    lastTime = time; // so the next frame can calculate the time difference again
    window.requestAnimationFrame(update); // to create an update loop
}