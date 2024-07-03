// 1. 引入 fs 模組
const fs = require("fs");

// 讀取 code 資料夾下的所有檔案
const files = fs.readdirSync('./練習/code');

// console.log(files); // [ '01_創建 buffer.js', '02_讀取 buffer.js', '03_寫入 buffer.js', '04_複製 buffer.js', '05_串接 buffer.js', '06_切割 buffer.js', '07_比較 buffer.js', '08_查找 buffer.js', '09_替換 buffer.js', '10_轉換 buffer.js', '11_壓縮 buffer.js', '12_加密 buffer.js', '13_解密 buffer.js', '14_相對路徑 bug.js', '15_批量重命名.js' ]

// 遍歷 files 陣列
files.forEach( item => {
  // console.log(item);
  // 拆分文件名
  let data = item.split('_');
  // console.log(data);
  let [num, name] = data;
  // console.log(num, name);
  if(Number(num) < 10) {
    num = '0' + num;
  }
  // 創建新的文件名
  let newName = `${num}_${name}`;
  console.log(newName);
  // 重命名文件
  fs.renameSync(`./練習/code/${item}`, `./練習/code/${newName}`);
})