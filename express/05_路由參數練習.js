// 導入 express
const express = require("express");
// 導入 json 文件
// 用解構賦值的方式獲取對象陣列
const { singers } = require("./singers.json");
console.log(singers);

// 創建 express 應用對象
const app = express();

// 創建路由
app.get("/singer/:id.html", (req, res) => {
  // 獲取路由參數
  const { id } = req.params;
  // 在陣列中尋找對應 id 的數據
  let result = singers.find((item) => {
    if(item.id == Number(id)) {
      return true;
    }
  });
  // 判斷
  if (!result) {
    res.statusCode = 404;
    res.end(`<h1>404 Not Found</h1>`);
    return;
  }
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h2>${result.singer_name}</h2>
      <img src='${result.singer_pic}' />
    </body>
    </html>
    `);
});

// 監聽端口啟動服務
app.listen(3000, () => {
  console.log("服務器啟動成功，3000 正在監聽中...請訪問 http://127.0.0.1:3000");
});
