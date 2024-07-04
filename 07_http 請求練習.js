// 導入 http 模組
const http = require('http');

// 創建服務器
const server = http.createServer((req, res) => {
  // 獲取請求的方法
  let { method } = req;
  // 獲取請求的 URL 路徑
  let { pathname } = new URL(req.url, `http://127.0.0.1`);
  // console.log('method:', method);
  // console.log('pathname:', pathname);
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  if(method === 'GET' && pathname === '/login'){
    // 登陸的情況
    res.end("登陸頁面");
  } else if(method === 'GET' && pathname === '/reg'){
    // 註冊的情況
    res.end("註冊頁面");
  } else {
    // 其他情況
    res.end("Not Found");
  }
});

// 監聽服務器
server.listen(9000, () => {
  console.log('服務器已啟動, 請訪問: http://localhost:9000/');
});
