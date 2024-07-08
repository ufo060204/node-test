// 導入 http 模組
const http = require('http');
const fs = require('fs');

// 創建服務器
const server = http.createServer((req, res) => {
  // 獲取請求 url 的路徑
  let {pathname} = new URL(req.url, 'http://127.0.0.1');
  if (pathname === '/') {
    // 讀取文件
    let html = fs.readFileSync(__dirname + '/table.html', 'utf8');
    res.end(html);
  } else if (pathname === '/index.css') {
    // 讀取文件
    let css = fs.readFileSync(__dirname + '/index.css');
    res.end(css);
  } else if (pathname === '/index.js') {
    // 讀取文件
    let js = fs.readFileSync(__dirname + '/index.js');
    res.end(js);
  } else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1>');
  }
});

// 監聽服務器
server.listen(9000, () => {
  console.log('服務器已啟動, 請訪問: http://localhost:9000/');
});
