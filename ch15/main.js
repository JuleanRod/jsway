function appendToBody() {
    const p = document.createElement('p');
    p.innerHTML = "<p>Here is a more complete list <a href='https://en.wikipedia.org/wiki/List_of_programming_languages'>list</a> of all languages.</p>";
    document.appendToBody(p);
}

appendToBody();

