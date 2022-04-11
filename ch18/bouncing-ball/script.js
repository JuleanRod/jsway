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
    stop.removeAttribute('disabled');
    rotateAnimation('ball', 4);
});
