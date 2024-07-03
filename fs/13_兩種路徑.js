// 1. 引入 fs 模組
const fs = require("fs");

// 相對路徑
// fs.writeFileSync("./index.html", "love");
// fs.writeFileSync("index2.html", "love");
// fs.writeFileSync("../index3.html", "love");

// 絕對路徑
// fs.writeFileSync("C:/Users/USER/Desktop/index4.html", "love"); // 會報錯，因為沒有權限
fs.writeFileSync("/index4.html", "love"); // 多為 Linux 系統，會報錯，因為沒有權限