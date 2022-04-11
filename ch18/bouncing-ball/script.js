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

//once start is click, call the rotate animation
document.getElementById('start').addEventListener('click', e => {
    rotateAnimation('ball', 4);
});
