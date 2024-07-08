// 導入 http 模組
const http = require('http');

// 創建服務器
const server = http.createServer((req, res) => {
  // 獲取請求的方法
  // console.log(req.method);
  // 獲取請求的 URL
  // console.log(req.url); // 只包含 url 路徑部分, 不包含查詢字符串
  // 獲取 http 協議的版本
  // console.log(req.httpVersion); // 較少用到
  // 獲取 http headers
  // console.log(req.headers);
  console.log(req.headers.host);
  res.end("hello world"); // 有中文會亂碼
});

server.listen(9000, () => {
  console.log('服務器已啟動, 請訪問: http://localhost:9000/');
});
