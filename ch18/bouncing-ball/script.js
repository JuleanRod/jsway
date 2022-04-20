//create image rotation animation
let looper;
let degrees = 0;
function rotateAnimation(id, speed) {
    let element = document.getElementById(id);

    if (navigator.userAgent.match("Firefox")) {
        element.style.mozTransform = `rotate(${degrees}deg)`;
    } else {
        element.style.transform = `rotate(${degrees}deg)`;
    }
    looper = setTimeout('rotateAnimation(\'' + id + '\',' + speed + ')', speed);
    degrees++;
    if (degrees > 359) {
        degrees = 1
    }
}

//once start button is clicked, call the rotate animation
//and also enable the stop button
document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);


function start() {

    rotateAnimation('ball', 4);
    const ball = document.getElementById('ball');
    const stop = document.getElementById('stop');
    stop.disabled = false;
    let x = 1;
    let bounce = false;
    
    
    let timerId = setInterval(bounceAnimation, 5);

    function bounceAnimation() {

        if(x+ball.clientHeight <= window.innerHeight && bounce == false) {
            x += 2;
            ball.style.top = x + "px";
        } 
        else {
            bounce = true;
            x -= 1;
            ball.style.top = x + "px";
        }
        
    }
    
}
