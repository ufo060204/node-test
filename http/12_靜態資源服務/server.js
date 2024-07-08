/* 
創建一個 HTTP 伺服器, 端口為 9000, 滿足下列需求:
GET /index.html      響應 page/index.html 的文件內容
GET /css/app.css      響應 page/css/app.css 的文件內容
GET /images/logo.png  響應 page/images/logo.png 的文件內容
*/

const http = require('http'); // 導入 http 模組
const fs = require('fs'); // 導入 fs 模組
const path = require('path'); // 導入 path 模組
// 宣告一個變數
let mimes = {
  "html": "text/html",
  "css": "text/css",
  "js": "text/javascript",
  "png": "image/png",
  "jpg": "image/jpeg",
  "jpeg": "image/jpeg",
  "gif": "image/gif",
  "mp4": "video/mp4",
  "mp3": "audio/mp3",
  "json": "application/json",
};

// 創建服務器
const server = http.createServer((req, res) => {
  if(req.method !== 'GET') {
    res.statusCode = 405;
    res.end("<h1>405 Method Not Allowed</h1>");
    return;
  }
  // 獲取請求 url 的路徑
  let {pathname} = new URL(req.url, 'http://127.0.0.1');
  // 聲明一個變數
  let root = __dirname + "/page";
  // let root = __dirname + "/../";
  // 拼接文件路徑
  let filePath = root + pathname;
  // 讀取文件 fs 異步 API
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      // 設置字符集
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      // 判斷錯誤類型
      switch (err.code) {
        case 'ENOENT':
          res.statusCode = 404;
          res.end("<h1>404 Not Found</h1>");
          // break;
        case 'EPERM':
          res.statusCode = 403;
          res.end("<h1>403 Forbidden</h1>");
          // break;
          default:
          // 其他未知錯誤
          res.statusCode = 500;
          res.end("<h1>Internal Server Error</h1>");
      }
      return;
    }
    // 判斷文件類型
    let ext = path.extname(filePath).slice(1);
    console.log(ext);
    // 根據文件類型設置 Content-Type
    let type = mimes[ext];
    if(type) {
      // 匹配到了
      // res.setHeader('Content-Type', `${type}; charset=utf-8`);
      // 響應頭的優先級高於 meta charset="", 但通常不會有差異化
      if (ext === 'html') {
        // 如果是 html 文件, 需要設置 charset
        res.setHeader('Content-Type', type + ';charset=utf-8');
      } else {
        // 其他文件不用因為會根據 meta charset="" (網頁字符集)來設置
        res.setHeader('Content-Type', type);
      }
    } else {
      // 沒有匹配到
      res.setHeader('Content-Type', 'application/octet-stream');
    }
    // res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // 響應文件內容
    res.end(data);
  });
});

// 監聽服務器
server.listen(9000, () => {
  console.log('服務器已啟動, 請訪問: http://localhost:9000/');
});

// vscode 的 live server 是以打開的文件夾為根目錄