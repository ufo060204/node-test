// 1. 安裝 mongoose
// 2. 引入 mongoose
const mongoose = require("mongoose");

// 3. 連接數據庫
mongoose.connect("mongodb://localhost:27017/node");

// 4. 設置回調函數
// 設置連接成功的回調函數
// once 一次 事件回調函數只執行一次(官方推薦)
mongoose.connection.once("open", async function () {
  // 5. 創建文檔結構對象 (Schema)
  // 設置集合中文檔的屬性及屬性值的類型
  let BookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true, // 必填
      // unique: true, // 唯一
    },
    author: {
      type: String,
      default: "佚名", // 默認值
    },
    style: {
      type: String,
      enum: ["歷史", "言情", "科幻", "懸疑"], // 枚舉
    },
    price: Number,
    is_hot: Boolean,
    tags: Array,
    pub_time: Date,
    test: mongoose.Schema.Types.Mixed, // 混合類型(任意類型)
  });

  // 6. 創建集合對象 (Model) 對文檔操作的封裝對象
  let BookModel = mongoose.model("novels", BookSchema);

  // 7. 設置字段的個性化驗證
  // try {
  //   let result = await BookModel.find().select({name: 1, author: 1, _id: 0});
  //   console.log("讀取文檔成功");
  //   console.log(result);
  // } catch (err) {
  //   console.log("讀取文檔失敗");
  //   console.log(err);
  // }

  // 數據排序
  // try {
  //   let result = await BookModel.find().select({name: 1, price: 1, _id: 0}).sort({price: 1});
  //   console.log("讀取文檔成功");
  //   console.log(result);
  // } catch (err) {
  //   console.log("讀取文檔失敗");
  //   console.log(err);
  // }

  // 數據擷取 (skip 跳過 limit 限制) 
  // 取前三條數據
  // try {
  //   let result = await BookModel.find().select({name: 1, price: 1, _id: 0}).limit(3).sort({price: -1});
  //   console.log("讀取文檔成功");
  //   console.log(result);
  // } catch (err) {
  //   console.log("讀取文檔失敗");
  //   console.log(err);
  // }

  // 取前 4 - 6 條數據
  try {
    let result = await BookModel.find().select({name: 1, price: 1, _id: 0}).skip(3).limit(3).sort({price: -1});
    console.log("讀取文檔成功");
    console.log(result);
  } catch (err) {
    console.log("讀取文檔失敗");
    console.log(err);
  }

});
// 設置連接失敗的回調函數
mongoose.connection.once("error", function () {
  console.log("數據庫連接失敗");
});

// 設置連接斷開的回調函數
mongoose.connection.once("close", function () {
  console.log("數據庫連接斷開");
});
