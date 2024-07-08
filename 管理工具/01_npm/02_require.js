// 導入 uniq 
const uniq = require('uniq');

// 使用 uniq
const arr = [1, 2, 2, 3, 4, 5, 5, 6];
console.log(uniq(arr)); // [ 1, 2, 3, 4, 5, 6 ]