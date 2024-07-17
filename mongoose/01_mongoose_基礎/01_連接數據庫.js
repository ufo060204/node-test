// 1. 安裝 mongoose
// 2. 引入 mongoose
const mongoose = require('mongoose');

// 3. 連接數據庫
mongoose.connect('mongodb://localhost:27017/node');

// 4. 設置回調函數
// 設置連接成功的回調函數 
// once 一次 事件回調函數只執行一次(官方推薦)
mongoose.connection.once('open', function () { 
  console.log('數據庫連接成功');
  // app.listen(8080);
});

// 設置連接失敗的回調函數
mongoose.connection.once('error', function () {
  console.log('數據庫連接失敗');
});

// 設置連接斷開的回調函數
mongoose.connection.once('close', function () {
  console.log('數據庫連接斷開');
});

// 關閉數據庫連接
setTimeout(function () {
  mongoose.disconnect();
}, 3000);