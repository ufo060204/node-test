// 導入 http 模組
const http = require('http');
const fs = require('fs');

// 創建服務器
const server = http.createServer((req, res) => {
  // 讀取文件
  let html = fs.readFileSync(__dirname + '/table.html', 'utf8');
  res.end(html);
});

// 監聽服務器
server.listen(9000, () => {
  console.log('服務器已啟動, 請訪問: http://localhost:9000/');
});
