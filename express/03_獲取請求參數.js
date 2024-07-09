// 導入 express
const express = require('express');

// 創建 express 應用對象
const app = express();

// 創建路由
app.get('/request', (req, res) => {
  // 原生操作
  console.log(req.method);
  console.log(req.url);
  console.log(req.httpVersion);
  console.log(req.headers);
  // console.log(req.params);
  // console.log(req.body);
  
  // express 操作
  console.log(req.path);
  console.log(req.query);

  // 獲取 ip
  console.log(req.ip);

  // 獲取 headers
  console.log(req.get('host'));

  res.end("Hello , this is request");
});


// 監聽端口啟動服務
app.listen(3000, () => {
  console.log('服務器啟動成功，3000 正在監聽中...')
});