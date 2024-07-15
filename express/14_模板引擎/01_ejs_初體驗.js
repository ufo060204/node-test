// 1. 安裝 EJS
// 2. 導入 EJS
const ejs = require("ejs");
const fs = require("fs");
// 讀取檔案


// 字串
let bandName = "AC/DC";
// let str ="這是樂團名稱：AC/DC";
let countryName = "Australia";

// 宣告變數
let str = fs.readFileSync('./01_html.html', 'utf8').toString();

// 3. 使用 EJS 換染
let result = ejs.render(str, { bandName: bandName, countryName: countryName});

console.log(result); // 這是樂團名稱 AC/DC
