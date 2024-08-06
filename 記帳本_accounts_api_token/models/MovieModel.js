// 導入 mongoose
const mongoose = require("mongoose");

// 創建文檔結構對象 (Schema)
const MovieSchema = new mongoose.Schema({
  title: String,
  director: String,
});

// 創建集合對象 (Model) 對文檔操作的封裝對象
const MovieModel = mongoose.model("movie", MovieSchema);

// 導出 BookModel
module.exports = MovieModel;

