/* 
紀錄每個 url 的 ip 和地址
*/

// 導入 express
const express = require("express");
const fs = require("fs");
const path = require("path");

// 創建 express 應用對象
const app = express();

// 宣告中間件函數
function middleware(req, res, next) {
  // 獲取 url 和 ip
  let { url, ip } = req;
  console.log(url, ip);
  // 將訊息保存在文件中 access.log
  fs.appendFileSync(
    path.resolve(__dirname, "./access.log"),
    `${url} ${ip}\r\n`
  );
  // 調用 next 方法
  next();
}

// 使用中間件
app.use(middleware);

// 創建路由
app.get("/home", (req, res) => {
  res.send("前台首頁");
});

app.get("/admin", (req, res) => {
  res.send("後台首頁");
});

app.all("*", (req, res) => {
  res.send("404 Not Found");
});

// 監聽端口啟動服務
app.listen(3000, () => {
  console.log("服務器啟動成功，3000 正在監聽中...請訪問 http://127.0.0.1:3000");
});