// 1. 導入 express
const express = require('express');

// 2. 創建 express 應用對象
const app = express();

// 3. 創建路由
app.get('/', (req, res) => {
  res.end('Hello Express');
});

// 4. 監聽端口啟動服務
app.listen(3000, () => {
  console.log('服務器啟動成功，3000 正在監聽中...')
});