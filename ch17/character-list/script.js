// The TV show Game of Thrones is about the struggle for power between several noble families. In this exercise, you'll have to show characters belonging to the house selected by the user.

// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

//add houses to the select dropdown element
const houseNode = document.getElementById('house');
for(let i = 0; i < houses.length; i++) {
    const element = document.createElement("option");
    element.value = houses[i].name;
    element.innerHTML = houses[i].name;
    houseNode.appendChild(element);
}

//repopulate the list of characters based on users choice
houseNode.addEventListener('change', e => {

    const code = houses.filter(house => house.name == e.target.value)[0].code;
    const charactersElement = document.getElementById('characters');
    charactersElement.innerHTML = "";
    const charactersList = getCharacters(code);
    
    for(let i = 0; i < charactersList.length; i++){
        const li = document.createElement("li");
        li.innerHTML = charactersList[i];
        charactersElement.appendChild(li);
    }
});


