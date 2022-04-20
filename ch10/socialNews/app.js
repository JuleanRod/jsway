const LINKS = [];

function menu() {
    const menu = "Choose an option:\n1: Show links\n2: Add a link\n3: Removee a link\n0: Quit"
    let input = Number(prompt(menu));
    do {
        switch (input) {
            case 1:
                option1();
                break;
            case 2:
                option2();
                break;
            case 3:
                option3();
                break;
            default:
                alert("Exiting program...");
                break;
        }

    } while(input != 0);
}

function option1() {
    if(LINKS.length == 0) {
        window.alert("The list is empty");
        menu();
    } else {
        let result = []
        LINKS.forEach(element => {
            result.push(`${element.title} (${element.URL}). Author: ${element.author}`);
        });
        result.forEach(x =>  window.alert(x.toString()));
    }
    menu();
}

function option2() {
    let input = window.prompt("Enter a link information separated by a comma:\nEx: title, URL, author");
    if(validateLink(input)) {
        let inputArray = input.split(",");
        LINKS.push({title: inputArray[0], URL: inputArray[1], author: inputArray[2]});
    }else {
        window.alert("Invalid input");
    }
    menu();
    
}

function option3() {
    let input = Number(window.prompt(`Enter the index of the link to be removed (between 1 and ${LINKS.length})`));
    if(input < 1 || input > LINKS.length) {
        window.alert("Invalid input! Try again");
    } else {
        LINKS.pop(input+1);
        window.alert(`Index ${input} has been removed`);
    }
    menu();
}

// Helper functions
const startsWith = string => {
    if(string.startsWith('http://') || string.startsWith('https://')){
        return true;
    }
    return false;
};

const validateLink = string => {
    let stringArr = string.split(",");
    if(stringArr.length >= 3  && startsWith(stringArr[1])) return true;
    return false;
};