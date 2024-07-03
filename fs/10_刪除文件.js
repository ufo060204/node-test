// 1. 引入 fs 模組
const fs = require("fs");

// 2. 調用 fs.unlink() 方法，刪除檔案 unlinksync
// fs.unlink("./資料/座右銘-修改.txt", (err) => {
//   if (err) {
//     console.log("刪除失敗");
//     return;
//   } else {
//     console.log("刪除成功");
//   }
// });

// 調用 rm 方法 (Node.js v14.14.0 以上版本引入新方法) rmSync
fs.rm("./資料/Camping-Video-Copy-Again.mp4", (err) => {
  if (err) {
    console.log("刪除失敗");
    return;
  } else {
    console.log("刪除成功");
  }
});