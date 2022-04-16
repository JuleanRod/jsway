//create image rotation animation
let looper;
let degrees = 0;
function rotateAnimation(id, speed) {
    let element = document.getElementById(id);
    
    if(navigator.userAgent.match("Firefox")){
        element.style.mozTransform = `rotate(${degrees}deg)`;
    } else {
        element.style.transform = `rotate(${degrees}deg)`;
    }
    looper = setTimeout('rotateAnimation(\''+id+'\','+speed+')', speed);
    degrees++;
    if(degrees > 359) {
        degrees = 1
    }
}

//once start button is clicked, call the rotate animation
//and also enable the stop button
document.getElementById('start').addEventListener('click', e => {
    const stop = document.getElementById('stop');
    moveBall();
    stop.removeAttribute('disabled');
    rotateAnimation('ball', 4);
});


//movement
const ballElement = document.getElementById('ball');
const frame = document.getElementById('frame');
const ballWidth = parseFloat(getComputedStyle(ballElement).width);

// movement value in pixels
const movement = 2;
const moveBall = () => {
    //convert the left position og the ball (value of the form 'XXpx') to a number
    const xBall =  parseFloat(getComputedStyle(ballElement).left);
    const max = parseFloat(getComputedStyle(frame).width);
    // If the ball isn't already to the end of the frame
    if(xBall + ballWidth <= max) {
        //ball movement
        ballElement.style.left = (xBall + movement) + 'px';
        animationId = requestAnimationFrame(moveBall);
        requestAnimationFrame(moveBall);
    } else {
        // cancel the animation
        cancelAnimationFrame(animationId);
    }
}

let animationId = requestAnimationFrame(moveBall);
