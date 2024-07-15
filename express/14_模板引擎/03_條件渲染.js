/* 
通過 isLogin 來判斷最終的輸出內容
true 輸出 <span>歡迎回來</span>
false 輸出 <button登入</button> <button>註冊</button>
*/

const ejs = require("ejs");
const fs = require("fs");

// 變數
let isLogin = true;

// 原生 JS
// if (isLogin) {
//   console.log("<span>歡迎回來</span>");
// } else {
//   console.log("<button>登入</button> <button>註冊</button>");
// }

// ejs 實現
// 讀取 html 內容
let html = fs.readFileSync("./03_home.html").toString();
let result = ejs.render(html, { isLogin: isLogin });

console.log(result);