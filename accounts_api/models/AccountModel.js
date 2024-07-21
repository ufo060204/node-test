// 導入 mongoose
const mongoose = require("mongoose");
// 創建文檔結構對象 (Schema)
// 合中文檔的屬性及屬性值的類型
let AccountSchema = new mongoose.Schema({
  // 標題
  title: {
    type: String,
    required: true,
  },
  // 時間
  time: {
    type: Date,
  },
  // 類型
  type: {
    type: Number,
    default: -1,
  },
  // 金額
  account: {
    type: Number,
    required: true,
  },
  // 備註
  remarks: {
    type: String,
  },
});


// 創建集合對象 (Model) 對文檔操作的封裝對象
let AccountModel = mongoose.model("accounts", AccountSchema);

// 導出 AccountModel
module.exports = AccountModel;
