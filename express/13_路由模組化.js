// 導入 express
const express = require("express");
const homeRouter = require("./routes/homeRouter");
const adminRouter = require("./routes/adminRouter");

// 創建 express 應用對象
const app = express();

// 設置
app.use(homeRouter);
app.use(adminRouter);


app.all("*", (req, res) => {
  res.send("404 Not Found");
});

// 監聽端口啟動服務
app.listen(3000, () => {
  console.log("服務器啟動成功，3000 正在監聽中...請訪問 http://127.0.0.1:3000");
});