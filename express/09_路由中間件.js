/*
針對 /admin /setting 的請求, 要求 URL 攜帶 code=512 的參數, 如未攜帶提示[暗號錯誤]
*/

// 導入 express
const express = require("express");

// 創建 express 應用對象
const app = express();

// 創建路由
app.get("/home", (req, res) => {
  res.send("前台首頁");
});

// 聲明中間件函數
let checkCodeMiddleware = (req, res, next) => {
  //判斷 URL 中是否 code 參數等於 521
  // 注意: 這裡的 req.query.code 是字符串, 不是數字
  if (req.query.code === "521") {
    next();
  } else {
    res.send("暗號錯誤");
  }
}

// 後台
app.get("/admin", checkCodeMiddleware, (req, res) => {
  //判斷 URL 中是否 code 參數等於 521
  res.send("後台首頁");
});

// 後台設置
app.get("/setting", checkCodeMiddleware, (req, res) => {
  res.send("設置頁面");
});

app.all("*", (req, res) => {
  res.send("404 Not Found");
});

// 監聽端口啟動服務
app.listen(3000, () => {
  console.log("服務器啟動成功，3000 正在監聽中...請訪問 http://127.0.0.1:3000");
});