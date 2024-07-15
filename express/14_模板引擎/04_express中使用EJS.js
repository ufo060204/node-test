// 導入 express
const express = require("express");
const ejs = require("ejs");
const fs = require("fs");
// 導入 path
const path = require("path");

// 創建 express 應用對象
const app = express();

// 1. 設置模板引擎
app.set("view engine", "ejs"); // pug twing 其他模板引擎
// 2. 設置模板目錄存放位置 模板文件: 具有模板內容的文件
app.set("views", path.resolve(__dirname, "./views"));


// 創建路由
app.get("/", (req, res) => {
  // 3. render 方法渲染模板
  // 接收兩個參數 第一個參數是模板文件的名稱 第二個參數是數據對象
  // res.render('模板文件名', '數據對象')
  let title = "這是一段測試文字";
  res.render('home', {title: title});
  // 4. 創建模板文件
});

app.all("*", (req, res) => {
  res.send("404 Not Found");
});

// 監聽端口啟動服務
app.listen(3000, () => {
  console.log("服務器啟動成功，3000 正在監聽中...請訪問 http://127.0.0.1:3000");
});
