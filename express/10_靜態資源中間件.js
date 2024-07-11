// 導入 express
const express = require("express");

// 創建 express 應用對象
const app = express();

// 靜態資源中間件
app.use(express.static(__dirname + "/public"));

// 創建路由
app.get("/", (req, res) => {
  res.send("我才是首頁~~");
});


// 監聽端口啟動服務
app.listen(3000, () => {
  console.log("服務器啟動成功，3000 正在監聽中...請訪問 http://127.0.0.1:3000");
});
