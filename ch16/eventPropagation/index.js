// Click handler on the document
document.addEventListener("click", e => {
  console.log("Document handler");
  e.stopPropagation();
});
// Click handler on the paragraph
document.getElementById("para").addEventListener("click", e => {
  console.log("Paragraph handler");
  e.stopPropagation();
});
// Click handler on the button
document.getElementById("propa").addEventListener("click", e => {
  console.log("Button handler");
  e.stopPropagation();  //Stop the event propagation
});
