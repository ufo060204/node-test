// 導入 mongoose
const mongoose = require("mongoose");
// 創建文檔結構對象 (Schema)
// 合中文檔的屬性及屬性值的類型
let BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
});

// 創建集合對象 (Model) 對文檔操作的封裝對象
let BookModel = mongoose.model("books", BookSchema);

// 導出 BookModel
module.exports = BookModel;
