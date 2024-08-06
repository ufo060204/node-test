// 導入 mongoose
const mongoose = require("mongoose");
// 創建文檔結構對象 (Schema)
// 合中文檔的屬性及屬性值的類型
let UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});


// 創建集合對象 (Model) 對文檔操作的封裝對象
let UserModel = mongoose.model("users", UserSchema);

// 導出 UserModel
module.exports = UserModel;
