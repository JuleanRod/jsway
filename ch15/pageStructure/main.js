// // Adding a paragraph ===============
// function appendToBody() {
//     const list = document.getElementById("languages");
//     console.log(document);
//     const p = document.createElement('p');
//     p.innerHTML = "Here is a more complete list <a href='https://en.wikipedia.org/wiki/List_of_programming_languages'>list</a> of all languages.";
//     document.body.appendChild(p);

// }
// appendToBody();

//Newspaper list =============
// const newspapers = [
//   "https://www.nytimes.com",
//   "https://www.washingtonpost.com",
//   "http://www.economist.com",
// ];

// // use forEach loop , add each link in an unorder list
// function appendLinksToBody() {
//   const ul = document.createElement("ul");
//   newspapers.forEach((newspaper) => {
//     const li = document.createElement("li");
//     li.innerHTML = `<a href="${newspaper}">${newspaper}</a>`;
//     ul.appendChild(li);
//   });
//   document.body.appendChild(ul);
// }

// appendLinksToBody();

// Mini-dictionary ========

const words = [
  {
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished",
  },
  {
    term: "Tautology",
    definition:
      "logical argument constructed in such a way that it is logically irrefutable",
  },
  {
    term: "Oxymoron",
    definition:
      "figure of speech that juxtaposes elements that appear to be contradictory",
  },
];

function displayList() {
  const dl = document.createElement("dl");
  dl.setAttribute("id", "datalist");
  document.getElementById("content").appendChild(dl);

  words.forEach(obj =>{
    const dt = document.createElement("dt");
    dt.innerHTML = `<strong>${obj.term}</strong>`;
    document.getElementById("datalist").appendChild(dt);
    const dd = document.createElement("dd");
    dd.textContent = `${obj.definition}`;
    document.getElementById("datalist").appendChild(dd);
  });
}

displayList();
