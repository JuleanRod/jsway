import { option1, option2, option3 } from "functionality.js"
 
const menu = `Choose an option:\n1: Show links\n2: Add a link\n3: Removee a link\n0: Quit`
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
