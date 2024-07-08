// fs 建議用絕對路徑引入
// 自己寫的模組建議用相對路徑引入 不能省略 ./ 或 ../

// 引入模組
// const me = require('./me');

// 引入 JS 可以省略副檔名
const me = require('./me');

// 引入 JSON 可以省略副檔名
const text = require('./text');
console.log(text);
// 備註: 會先找到 text.js，如果沒有找到，才會找 text.json

// 引入其他類型會以 js 來解析
const abc = require('./abc');
console.log(abc);
// 執行模組
// me();