// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node
const showChild = (node, index) => {
  // TODO: add code here
  // console.log(node.nodeType);
  
  if(index > node.childNodes.length) {
    console.log("Incorrect Index");
  } else if(index < 0){
    console.log("Incorrect Index");
  }else if(node.nodeType != 1){
    console.log('Wrong node type');
  } else {
    console.log(node.childNodes[index]);
  }
};

// Should show the h1 node
showChild(document.body, 1);

// Should show "Incorrect index"
showChild(document.body, -1);

// Should show "Incorrect index"
showChild(document.body, 8);

// Should show "Wrong node type"
showChild(document.body.childNodes[0], 0);
