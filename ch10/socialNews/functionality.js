import { LINKS } from 'links.js';

function option1() {
    LINKS.array.forEach(element => {
        window.alert(`${element.title} (${URL}). Author: ${element.author}\n`);
    });    
}

function option2() {
    let input = window.prompt("Enter a link information separated by a comma:\n Ex: title, URL, author");
    if(validateLink(input)) {
        let inputArray = input.split();
        LINKS.push({title: inputArray[0], URL: inputArray[1], author: inputArray[2]});
    }
    window.alert("Invalid input");
}

function option3() {
    let input = Number(window.prompt(`Enter the index of the link to be removed (between 1 and ${LINKS.length}`));
    window.alert(`Index ${input} has been removed`);
}

// Helper functions
const startsWith = string => {
    if(string.startsWith('http://') || string.startsWith('https://')){
        return true;
    }
    return false;
};

const validateLink = string => {
    let arrString = string.split(",");
    if(arrString.length == 3  && startsWith(arrString[1])) return true;
    return false;
};

export { option1, option2, option3 }; 