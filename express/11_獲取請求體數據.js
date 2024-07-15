/* 
按照要求搭建 HTTP 服務

GET /login 顯示板單網頁
POST /login 獲取表單中用戶名和密碼
*/

// 導入 express
const express = require("express");
// 導入 body-parser
const bodyParser = require("body-parser");


// 創建 express 應用對象
const app = express();

// 解析 JSON 格式請求體的中間件
const jsonParser = bodyParser.json()

// 解析 query string 格式請求體的中間件
// 標單是 query string 格式的請求體
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// 創建路由
app.get("/login", (req, res) => {
  // res.send("這是表單頁面");
  // 響應一個表單頁面
  res.sendFile(__dirname + "/11_form.html");
});

app.post("/login", urlencodedParser, (req, res) => {
  // 獲取用戶名和密碼
  console.log(req.body);
  res.send("獲取用戶數據成功");
});


// 監聽端口啟動服務
app.listen(3000, () => {
  console.log("服務器啟動成功，3000 正在監聽中...請訪問 http://127.0.0.1:3000");
});
