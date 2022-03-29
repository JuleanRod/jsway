// Write the associated JavaScript code that updates the background color of all div tags according to the key (R, Y, G or B) pressed by the user.

document.addEventListener("keydown", e => {
    let c = undefined;
    const divs = Array.from(document.getElementsByTagName("div"));
    switch(String.fromCharCode(e.keyCode)){
        case 'R': 
            c = 'red';
            break;
        case 'Y':
            c = 'yellow';
            break;
        case 'G':
            c = 'green';
            break;
        case 'B':
            c = 'blue';
            break; 
    }
    divs.forEach(div => {
        div.style.backgroundColor = c;
    });
    return String.fromCharCode(e.keyCode);
});