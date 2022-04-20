const choiceBackgroundColor = prompt("Please enter a color for background-text: ");
const choiceTextColor = prompt("Please enter color for text: ");

function alterColors(tc, bc){

    const arr = Array.from(document.querySelectorAll("div"));
    arr.forEach(value => {
        value.style.color = tc;
        value.style.backgroundColor = bc;
    });

}

alterColors(choiceTextColor, choiceBackgroundColor);
