// 導入 http 模組
const http = require('http');

// 創建服務器
const server = http.createServer((req, res) => {
  res.end('Hello, World!'); // 發送回應, 並結束請求
});

// 監聽端口, 啟動服務器
server.listen(3000, () => {
  console.log('服務器已啟動, 請訪問: http://localhost:3000/');
});