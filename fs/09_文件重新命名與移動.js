// 1. 引入 fs 模組
const fs = require("fs");

// 2. 調用 fs.rename() 方法，將檔案重新命名
// fs.rename("./座右銘.txt", "./座右銘-修改.txt", (err) => {
//   if (err) {
//     console.log("修改失敗");
//     return;
//   } else {
//     console.log("修改成功");
//   }
// });

// 文件移動
fs.rename("./座右銘-修改.txt", "./資料/座右銘-修改.txt", (err) => {
  if (err) {
    console.log("移動失敗");
    return;
  } else {
    console.log("移動成功");
  }
});