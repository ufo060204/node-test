// 1. 安裝 mongoose
// 2. 引入 mongoose
const mongoose = require("mongoose");

// 3. 連接數據庫
mongoose.connect("mongodb://localhost:27017/node");

// 4. 設置回調函數
// 設置連接成功的回調函數
// once 一次 事件回調函數只執行一次(官方推薦)
mongoose.connection.once("open",async function () {
  // 5. 創建文檔結構對象 (Schema)
  // 設置集合中文檔的屬性及屬性值的類型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean,
    tags: Array,
    pub_time: Date,
    test: mongoose.Schema.Types.Mixed, // 混合類型(任意類型)
  });

  // 6. 創建集合對象 (Model) 對文檔操作的封裝對象
  let BookModel = mongoose.model("books", BookSchema);

  // 7. 創建文檔對象 (Document)
  try {
    const data = await BookModel.create({
      name: "三國演義",
      author: "羅貫中",
      price: 2000,
      is_hot: true,
      tags: ["四大名著", "歷史小說"],
      pub_time: new Date(),
      test: 'abc',
    });
    // 如果沒有出錯，則打印添加的文檔對象
    console.log(data);
  } catch (error) {
    // 如果有錯誤，則打印錯誤
    console.log(error);
  }
  // 8. 關閉數據庫連接 項目運行中不會關閉數據庫連接
  mongoose.connection.close();

  // 回調寫法官方已經棄用(如下)
  // BookModel.create({
  //   name: "三國演義",
  //   author: "羅貫中",
  //   price: 100,
  // },(err, data) => {
  //   // 判斷是否有錯誤
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   // 如果沒有出錯，則打印添加的文檔對象
  //   console.log(data);
  // });
});
// 設置連接失敗的回調函數
mongoose.connection.once("error", function () {
  console.log("數據庫連接失敗");
});

// 設置連接斷開的回調函數
mongoose.connection.once("close", function () {
  console.log("數據庫連接斷開");
});

