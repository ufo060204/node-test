// 導入 http 模組
const http = require('http');

// 創建服務器
const server = http.createServer((req, res) => {
  // 1.聲明一個變量，用於存儲數據
  let body = '';
  // 2.綁定 data 事件
  req.on('data', (chunk) => {
    body += chunk;
  });
  // 3.綁定 end 事件
  req.on('end', () => {
    console.log(body);
  });
  // 4.響應客戶端
  res.end("Hello World!"); 
});

server.listen(9000, () => {
  console.log('服務器已啟動, 請訪問: http://localhost:9000/');
});
