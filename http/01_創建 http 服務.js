// 導入 http 模組
const http = require('http');

// 創建服務器
const server = http.createServer((req, res) => {
  // res.end("Hello, World!"); // 發送回應, 並結束請求
  res.setHeader('Content-Type', 'text/plain; charset=utf-8'); // 設置響應頭, 解決中文亂碼
  res.end("你好"); // 有中文會亂碼
});

// 監聽端口, 啟動服務器
// http 默認端口為 80 , 但是在開發中, 一般不使用默認端口, 一般使用 3000, 5000, 8000, 8080 等端口 https 默認端口為 443
server.listen(9000, () => {
  console.log('服務器已啟動, 請訪問: http://localhost:9000/');
});

// 端口被占用時的解決辦法
// 1. 資源監視器 -> 找到被占用的端口, 記住 PID
// 2. 工作管理員 -> 詳細資料 -> 找到對應 PID 的程序 -> 結束任務