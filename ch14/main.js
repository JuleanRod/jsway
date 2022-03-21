// TODO: write the countElements() function here

function countElements(string) {
    const length = Array.from(document.querySelectorAll(string)).length;
    return length;
}

console.log(countElements("p"));              // Should show 4
console.log(countElements(".adjective"));     // Should show 3
console.log(countElements("p .adjective"));   // Should show 3
console.log(countElements("p > .adjective")); // Should show 2


// Handling attributes
function linkInfo(){
    const link = Array.from(document.querySelectorAll("a"));
    console.log(link.length);
    console.log(link[0].href);
    console.log(link[link.length-1].href);
}

linkInfo();

// Handling classes
// Show if an element has a class
const has = (id, someClass) => {
  // TODO: write the function code
  const element = document.getElementById(id);
  if(element === null){
      console.error(`No element has id ${id}`);
  } else if(element.classList.contains(someClass)){
      console.log(true);
  } else {
      console.log(false);
  }
};

has("saxophone", "wood wind");     // Should show true
has("saxophone", "brass");        // Should show false
has("trumpet", "brass");          // Should show true
has("contrabass", "chordophone"); // Should show an error messagefunction has(){
