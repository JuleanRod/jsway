const arrays = [[1, 4], [11], [3, 5, 7]];

// TODO: compute the value of the arraysSum variable

const arraysSum = [].concat(...arrays).reduce((acc, value)=>acc+value, 0);

console.log(arraysSum); // Should show 31