// 導入 express
const express = require("express");

// 創建 express 應用對象
const app = express();

// 創建路由
app.get("/:id.html", (req, res) => {
  // 獲取 URL 路由參數
  // params 是 req 一個對象上的屬性，裡面存放著所有的路由參數
  console.log(req.params.id);
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.end("商品詳情");
});

// 監聽端口啟動服務
app.listen(3000, () => {
  console.log("服務器啟動成功，3000 正在監聽中...請訪問 http://127.0.0.1:3000");
});
