// 導入 http 模組
const http = require('http');

// 創建服務器
const server = http.createServer((req, res) => {
  // 實例化 URL 對象
  let myURL = new URL(req.url, `http://127.0.0.1`);
  console.log(myURL);
  // 輸出路徑
  console.log(myURL.pathname);
  // 輸出查詢字符串
  console.log(myURL.searchParams.get('keyword'));
  res.end("Hello Node.js Server!");
});

server.listen(9000, () => {
  console.log('服務器已啟動, 請訪問: http://localhost:9000/');
});
