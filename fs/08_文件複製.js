/* 需求：
複製 [資料] 文件夾下的 Camping-VideoColorSpace.mp4 
*/
// 用以獲得內存使用情況
const process = require("process");
// 方式一 readFile
// const fs = require("fs");
// // 讀取文件內容
// let data = fs.readFileSync("./資料/Camping-Video.mp4");

// // 寫入文件內容
// fs.writeFileSync("./資料/Camping-Video-Copy.mp4", data);
// console.log(process.memoryUsage()) 
/* { rss: 22872064, heapTotal: 4562944, heapUsed: 2824624, external: 8272 } 
rss => 內存使用量 
heapTotal 堆內存總量 
heapUsed 堆內存使用量 
external 外部內存使用量 
22872064 / 1024 / 1024 = 21.8MB 內存
*/

// 方式二 流式操作
// const fs = require("fs");
// // 創建讀取流對象
// const rs = fs.createReadStream("./資料/Camping-Video.mp4");
// // 創建寫入流對象
// const ws = fs.createWriteStream("./資料/Camping-Video-Copy-Again.mp4");
// // 綁定 data 事件
// rs.on("data", (chunk) => {
//   ws.write(chunk);
// });
// // 綁定 end 事件
// rs.on("end", () => {
//   console.log("複製完成");
//   console.log(process.memoryUsage()); 
// });
  /*  rss: 30552064,
  heapTotal: 4890624,
  heapUsed: 4611848,
  external: 7629467,
  arrayBuffers: 5997114
  30552064 / 1024 / 1024 = 29.1MB 內存
   */

// 方式三 pipe(簡便寫法)
const fs = require("fs");
const rs = fs.createReadStream("./資料/Camping-Video.mp4");
const ws = fs.createWriteStream("./資料/Camping-Video-Copy-Again.mp4");
rs.pipe(ws);

