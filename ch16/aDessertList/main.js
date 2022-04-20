// Write the JavaScript code that adds a new dessert to the list when the user clicks on the button. 
// The dessert name is chosen by the user.


const desserts = [
    "Tiramisu",
    "Chocolate cake",
    "Vanilla cake",
    "Apple pie",
    "Brownie",
    "Ice cream",
    "Fudge",
    "Lemon pie"
];

function displayDesserts() {
    
    desserts.forEach(dessert => {
        const li = document.createElement("li");
        li.innerText = dessert;
        li.setAttribute("class", `${dessert}`)
        document.getElementById("desserts").appendChild(li);
    })
}

function addDessert() {
    const newDessert = prompt('Enter a new dessert: ');
    if(!inputValidator(newDessert)){
        const li = document.createElement('li');
        li.innerText = newDessert;
        document.getElementById('desserts').appendChild(li);
    } else {
        alert(`${newDessert} is already in the list!`);
    }
    

}
// helper function
function inputValidator(input){
    return desserts.includes(input)
}

displayDesserts();

document.getElementById('addButton').addEventListener('click', e => {
    addDessert();
    e.stopPropagation();
})


// Bonus points for adding the possibility of changing a dessert's name when clicking on it.
document.addEventListener('click', e => {
    const className = Object.values(e.target.classList).join(' ')
    console.log(className);
    const replacement = prompt(`Enter new dessert replacing '${className}'`);
    const element = document.getElementsByClassName(className)[0];
    element.setAttribute('class', `${replacement}`);
    element.innerText = replacement;
})