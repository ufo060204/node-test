// 導入 express
const express = require("express");

// 創建 express 應用對象
const app = express();

// 創建路由
app.get("/response", (req, res) => {
  // 原生響應
  // res.statusCode = 200;
  // res.statusMessage = "OK";
  // res.setHeader("Content-Type", "text/html;charset=utf-8");
  // res.write("<h1>這是一個原生響應</h1>");
  // res.end("response");

  // express 響應
  // res.status(500);
  // res.set("Content-Type", "text/html;charset=utf-8");
  // res.send("<h1>這是一個 express 響應</h1>");

  res.status(500).set("Content-Type", "text/html;charset=utf-8").send("<h1>這是 ok 的</h1>");
});

// 監聽端口啟動服務
app.listen(3000, () => {
  console.log("服務器啟動成功，3000 正在監聽中...請訪問 http://127.0.0.1:3000");
});
