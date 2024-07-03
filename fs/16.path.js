// 1. 引入 fs 模組
const fs = require("fs");
const path = require("path");

// console.log(__dirname + '/index.html');

// resolve 解決問題 => 絕對路徑
// console.log(path.resolve(__dirname, './index.html'));
// console.log(path.resolve(__dirname, '/index.html'));

// sep 分隔符
// console.log(path.sep); // windows \ , linux /

// parse 解析路徑 =>  root dir base ext name '全域變數'
console.log(__filename); // 文件的絕對路徑
let str = "D:最近程式練習\\尚硅谷Node-test\\16.path.js";
console.log(path.parse(str));
/* {
  root: 'D:', // 根路徑
  dir: 'D:最近程式練習\\尚硅谷Node-test', // 目錄
  base: '16.path.js', // 文件名
  ext: '.js', // 擴展名
  name: '16.path' // 文件名不帶擴展名
} */

// basename 獲取文件名
console.log(path.basename(str)); // 16.path.js

// dirname 獲取目錄
console.log(path.dirname(str)); // D:最近程式練習\尚硅谷Node-test

// extname 獲取擴展名
console.log(path.extname(str)); // .js