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

  // 小於 lt = less than
  // 大於 gt = greater than
  // 小於等於 lte = less than equal
  // 大於等於 gte = greater than equal
  // 不等於 ne = not equal
  // 介於 $gt $lt

  // 價格小於 200 的書籍
  // try {
  //   let result = await BookModel.find({ price: { $lt: 200 } });
  //   console.log("讀取文檔成功");
  //   console.log(result);
  // } catch (err) {
  //   console.log("讀取文檔失敗");
  //   console.log(err);
  // }

  // 科幻或者懸疑類型的書籍
  // try {
  //   let result = await BookModel.find({ $or: [{ style: "科幻" }, { style: "懸疑" }] });
  //   console.log("讀取文檔成功");
  //   console.log(result);
  // } catch (err) {
  //   console.log("讀取文檔失敗");
  //   console.log(err);
  // }

  // 價格介於 100 到 200 之間的書籍
  // try {
  //   let result = await BookModel.find({
  //     $and: [{ price: { $gte: 100 } }, { price: { $lte: 200 } }]
  //   });
  //   console.log("讀取文檔成功");
  //   console.log(result);
  // } catch (err) {
  //   console.log("讀取文檔失敗");
  //   console.log(err);
  // }

  // 正規表達式, 搜索書名有 "十" 字的書籍
  // try {
  //   let result = await BookModel.find({
  //     $and: [{ name: /十/ }]
  //   });
  //   console.log("讀取文檔成功");
  //   console.log(result);
  // } catch (err) {
  //   console.log("讀取文檔失敗");
  //   console.log(err);
  // }
  // 另一種寫法
  try {
    let result = await BookModel.find({
      $and: [{ name: new RegExp("十") }]
    });
    console.log("讀取文檔成功");
    console.log(result);
  } catch (err) {
    console.log("讀取文檔失敗");
    console.log(err);
  }

  // 回調函數寫法已被官方棄用
  // BookModel.deleteOne(
  //   { _id: "6697db3e0a6c3c818c1d26cb" },
  //   function (err, data) {
  //     // 判斷是否刪除文檔成功
  //     if (err) {
  //       console.log("刪除文檔失敗");
  //       console.log(err);
  //       return
  //     } else {
  //       console.log("刪除文檔成功");
  //       console.log(data);
  //     }
  //   }
  // );
});
// 設置連接失敗的回調函數
mongoose.connection.once("error", function () {
  console.log("數據庫連接失敗");
});

// 設置連接斷開的回調函數
mongoose.connection.once("close", function () {
  console.log("數據庫連接斷開");
});
