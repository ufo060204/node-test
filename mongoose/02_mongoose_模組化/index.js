// 導入 db 模組
const db = require("./db/db");
// 導入 mongoose
const mongoose = require("mongoose");
// 導入 BookModel
const BookModel = require("./models/BookModel");

// 調用函數
db( async () => {
  console.log("數據庫連接成功");
  

  // 7. 創建文檔對象 (Document)
  try {
    const data = await BookModel.create({
      name: "三國演義",
      author: "羅貫中",
      price: 2000,
    });
    // 如果沒有出錯，則打印添加的文檔對象
    console.log(data);
  } catch (error) {
    // 如果有錯誤，則打印錯誤
    console.log(error);
  }
  // 8. 關閉數據庫連接 項目運行中不會關閉數據庫連接
  mongoose.connection.close();
}, () => {
  console.log("數據庫連接失敗");
}, () => {
  console.log("數據庫連接斷開");
});

