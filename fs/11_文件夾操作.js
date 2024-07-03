// 1. 引入 fs 模組
const fs = require("fs");

// 2. 創建文件夾 mkdir => make directory 製作文件夾
// fs.mkdirSync("./html", err => {
//   if (err) {
//     console.log("創建文件夾失敗");
//     return;
//   } else {
//     console.log("創建文件夾成功");
//   }
// });

// 2-2. 遞歸創建
// fs.mkdirSync("./a/b/c", {recursive: true}, err => {
//   if (err) {
//     console.log("創建文件夾失敗");
//     return;
//   } else {
//     console.log("創建文件夾成功");
//   }
// });

// 2-3. 讀取文件夾 readdir => read directory 讀取文件夾
// fs.readdir("./", (err, data) => {
//   if (err) {
//     console.log("讀取文件夾失敗");
//     return;
//   } else {
//     console.log(data);
//   }
// });

// 2-4. 刪除文件夾 rmdir => remove directory 刪除文件夾
// fs.rmdir("./html", err => {
//   if (err) {
//     console.log("刪除文件夾失敗");
//     return;
//   } else {
//     console.log("刪除文件夾成功");
//   }
// });

// 2-4. 遞歸刪除 不推薦使用
// fs.rmdir("./a", {recursive: true}, err => {
//   if (err) {
//     console.log(err);
//     console.log("刪除文件夾失敗");
//     return;
//   } else {
//     console.log("刪除文件夾成功");
//   }
// });

// 建議使用
fs.rm("./a", {recursive: true}, err => {
  if (err) {
    console.log(err);
    console.log("刪除文件夾失敗");
    return;
  } else {
    console.log("刪除文件夾成功");
  }
});