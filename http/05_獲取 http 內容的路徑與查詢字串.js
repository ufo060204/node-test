// 導入 http 模組
const http = require('http');
// 1.導入 url 模組
const url = require('url');

// 創建服務器
const server = http.createServer((req, res) => {
  // 2.解析 req.url
  const urlObj = url.parse(req.url, true);
  console.log(urlObj);

  // 3.獲取 url 路徑
  let pathname = urlObj.pathname;
  console.log(pathname);

  // 4.獲取 url 查詢字符串
  let keyword = urlObj.query.keyword;
  console.log(keyword);

  res.end("Hello Node.js Server!");
});

server.listen(9000, () => {
  console.log('服務器已啟動, 請訪問: http://localhost:9000/');
});
