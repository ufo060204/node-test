// 導入 express
const express = require('express');

// 創建 express 應用對象
const app = express();

// 創建路由
app.get('/', (req, res) => {
  res.end('Hello , this is home');
});

// post
app.post('/login', (req, res) => {
  res.end('Hello , this is login');
});

// 匹配所有路由
app.all('/test', (req, res) => {
  res.end('Hello , this is test');
})

// 404 響應
app.all('*', (req, res) => {
  res.end('404 Not Found');
})

// 監聽端口啟動服務
app.listen(3000, () => {
  console.log('服務器啟動成功，3000 正在監聽中...')
});