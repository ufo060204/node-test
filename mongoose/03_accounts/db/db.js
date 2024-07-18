/* 
success 連接成功的回調函數
error 連接失敗的回調函數
close 連接斷開的回調函數
*/
module.exports = function (success, error, close) {
  // 判斷 error 為其設置默認值(使用時不用傳入 err 請見 test.js)
  if (typeof error !== "function") {
    error = function () {
      console.log('連接失敗QQ')
    };
  }

  // 1. 安裝 mongoose
  // 2. 引入 mongoose
  const mongoose = require("mongoose");
  
  // 導入配置文件
  const { DBHOST, DBPORT, DBNAME } = require("../config/config");
  // 3. 連接數據庫
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);
  
  // 4. 設置回調函數
  // 設置連接成功的回調函數
  // once 一次 事件回調函數只執行一次(官方推薦)
  mongoose.connection.once("open", async function () {
    success();
  });
  
  // 設置連接失敗的回調函數
  mongoose.connection.once("error", function () {
    // console.log("數據庫連接失敗");
    error();
  });
  
  // 設置連接斷開的回調函數
  mongoose.connection.once("close", function () {
    // console.log("數據庫連接斷開");
    close();
  });
};
