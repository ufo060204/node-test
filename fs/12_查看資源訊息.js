// 1. 引入 fs 模組
const fs = require("fs");

// 2. stat 方法 status 縮寫，用來取得檔案狀態
fs.stat("./資料/Camping-Video.mp4", (err, stats) => {
  if (err) {
    console.log("讀取文件狀態失敗");
    return;
  } else {
    console.log(stats);
    // isFile() 是否為文件檔案
    console.log(stats.isFile());
    // isDirectory() 是否為文件夾
    console.log(stats.isDirectory());
  }
});

/* Stats {
  dev: 1883429943,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 562949954168624,
  size: 5855535, // 檔案大小
  blocks: 11440,
  atimeMs: 1719932605679.8943,
  mtimeMs: 1708837568163.1821,
  ctimeMs: 1708837568163.1821,
  birthtimeMs: 1719929804932.5635,
  atime: 2024-07-02T15:03:25.680Z, // 最後存取時間
  mtime: 2024-02-25T05:06:08.163Z, // 最後修改時間
  ctime: 2024-02-25T05:06:08.163Z, // 最後修改文件狀態時間
  birthtime: 2024-07-02T14:16:44.933Z // 創建時間
} */
