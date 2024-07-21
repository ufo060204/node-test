// 導入 express
const express = require('express');
// 導入 cookie-parser
const cookieParser = require("cookie-parser");


// 創建 express app
const app = express();
// 中間件設置
app.use(cookieParser());

//創建路由規則
app.get('/set-cookie', (req, res) => {
  // res.cookie('name', 'nathan'); // 會在瀏覽器關閉的時候，銷毀
  res.cookie('name', 'nathan', { maxAge: 1000 * 60 }); // max 最大 age 年齡 1000 * 60 = 1 分鐘 單位是毫秒，即使關閉瀏覽器也不會銷毀，除非過了一分鐘
  res.cookie('theme', 'blue');
  res.send('home');
});

// 刪除 cookie
app.get('/remove-cookie', (req, res) => {
  // 調用方法刪除 cookie
  res.clearCookie("theme");
  res.send('刪除成功！');
});

// 獲取 cookie
app.get('/get-cookie', (req, res) => {
  // 獲取 cookie
  const cookie = req.cookies;
  console.log(cookie);
  // res.send('獲取成功 cookie ！' + JSON.stringify(cookie));
  res.send(`歡迎您 ${cookie.name} ！`);
});

// 啟動伺服器
app.listen(3000, () => {
    console.log('伺服器已啟動... at http://localhost:3000');
});