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

  // 7. 刪除一條文檔數據
  // try {
  //   let result = await BookModel.deleteOne({ _id: "6697db3e0a6c3c818c1d26cb" });
  //   console.log("刪除文檔成功");
  //   console.log(result);
  // } catch (err) {
  //   console.log("刪除文檔失敗");
  //   console.log(err);
  // }
  
  // 8. 批量刪除文檔數據
  try {
    let result = await BookModel.deleteMany({ is_hot: "false" });
    console.log("刪除文檔成功");
    console.log(result);
  } catch (err) {
    console.log("刪除文檔失敗");
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
