// 導入 lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
// 獲取 db 對象
const db = low(adapter);

// 初始化數據
// Set some defaults
db.defaults({ posts: [], user: {} })
  .write()

// 寫入數據
// db.get("posts")
//   .push({ id: 1, title: "今天天氣很熱" })
//   .write();
// 在前面插入數據
// db.get("posts")
//   .unshift({ id: 3, title: "散步去" })
//   .write();

// 獲取單條數據
// let res = db.get("posts").find({ id: 2 }).value();
// console.log(res);

// 獲取數據
// console.log(db.get("posts").value());

// 刪除數據
// db.get("posts").remove({ id: 1 }).write();
// 返回值是刪除掉的對象
// let res = db.get("posts").remove({ id: 3 }).write();
// console.log(res);

// 更新數據
db.get("posts").find({ id: 2 }).assign({ title: "今天天氣很涼" }).write();