// 導入 express
const express = require("express");

// 創建 express 應用對象
const app = express();

// 聲明中間件
app.use((req, res, next) => {
  // 檢測請求頭中的 referer 是否為 127.0.0.1
  // 獲取 referer
  const referer = req.get("Referer");
  if(referer){
    console.log(referer);
    // 實例化
    const url = new URL(referer);
    // 獲取 hostname
    let hostname = url.hostname;
    console.log(hostname);
    // 判斷
    if(hostname !== "127.0.0.1"){
      // 響應 404
      res.status(404).send("<h1>404 Not Found</h1>");
      return;
    }
  }
  next();
});

// 靜態資源中間件
app.use(express.static(__dirname + "/public"));

// 監聽端口啟動服務
app.listen(3000, () => {
  console.log("服務器啟動成功，3000 正在監聽中...請訪問 http://127.0.0.1:3000");
});
