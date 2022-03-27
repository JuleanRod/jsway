
function option1() {
     
    LINKS.array.forEach(element => {
        window.alert(`${element.title} (${URL}). Author: ${element.author}\n`);
    });    
}

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
function option2(){
    let input = window.prompt("Enter a link information separated by a comma:\n Ex: title, URL, author");
    if(validateLink(input)) {
        
    }
}