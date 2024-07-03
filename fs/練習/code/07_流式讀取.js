// 1. 引入 fs 模組
const fs = require("fs");

// 2. 創建讀取流對象
const rs = fs.createReadStream("./資料/Camping-Video.mp4");

// 3. 綁定 data 事件
rs.on("data", (chunk) => {
  console.log(chunk.length); // 65536 => 64KB
  // console.log(chunk.toString()); // 無法轉換為字串因為是影片檔案
});

// 4. 綁定 end 事件(可選)
rs.on("end", () => {
  console.log("讀取完成");
});