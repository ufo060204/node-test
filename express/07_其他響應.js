// 導入 express
const express = require("express");

// 創建 express 應用對象
const app = express();

// 創建路由
app.get("/other", (req, res) => {
  // 跳轉響應
  // res.redirect("http://www.google.com");

  // 下載響應
  // res.download(__dirname + '/package.json');

  // JSON 響應
  // res.json({ 
  //   name: "小明", age: 18 
  // });

  // 響應文件內容
  res.sendFile(__dirname + "/07_index.html"); // 絕對路徑 path.resolve(__dirname, "index.html")
});

// 監聽端口啟動服務
app.listen(3000, () => {
  console.log("服務器啟動成功，3000 正在監聽中...請訪問 http://127.0.0.1:3000");
});
