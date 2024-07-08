// 導入 uniq 
// const uniq = require('uniq');
// const uniq = require('./node_modules/uniq'); // 等同於下面
// 會找資料夾底下 package.json 裡的 main
const uniq = require('./node_modules/uniq/uniq.js');

// 使用 uniq
const arr = [1, 2, 2, 3, 4, 5, 5, 6];
console.log(uniq(arr)); // [ 1, 2, 3, 4, 5, 6 ]