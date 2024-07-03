// 1. 引入 fs 模組
const fs = require("fs");

// 相對路徑參照物是執行 node 指令的位置
// fs.writeFileSync("./index.html", "love");

// 絕對路徑 '全域變數' 保存的是：所在文件的所在目錄的絕對路徑
console.log(__dirname); // 顯示當前檔案的絕對路徑
fs.writeFileSync(__dirname + "/index.html", "love");