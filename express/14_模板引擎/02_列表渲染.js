const ejs = require("ejs");
// 樂團
const bands = [
  "The Eagles",
  "Nirvana",
  "Metallic",
  "Helloween",
  "Guns and Roses",
];

// 原生 JS
// let str = "<ul>";

// bands.forEach((band) => {
//   str += `<li>${band}</li>`;
// });

// // 閉合標籤
// str += "</ul>";

// console.log(str);

// 使用 EJS
const fs = require("fs");
// 不寫 toString() 會是 Buffer, 無法解析
let html = fs.readFileSync("./02_bands.html", "utf8").toString();
let result = ejs.render(html, { bands: bands });

console.log(result);