


const contentStyle = getComputedStyle(document.getElementById("content"));
const ul = document.createElement("ul");
const height = document.createElement("li");
height.innerHTML = `Height: ${contentStyle.height}`;
const width =  document.createElement("li");
width.innerHTML = `Width: ${contentStyle.width}`;
document.getElementById("info").appendChild(ul);

document.querySelector("ul").appendChild(height);
document.querySelector("ul").appendChild(width);


