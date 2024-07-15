var express = require('express');
var router = express.Router();
// 導入 lowdb
// 導入 lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync(__dirname + "/../data/db.json");
// 獲取 db 對象
const db = low(adapter);
// 導入 shortid
const shortid = require("shortid");

// 記帳本列表
router.get('/account', function(req, res, next) {
  // 獲取所有帳單訊息
  let accounts = db.get("accounts").value();
  console.log(accounts);
  res.render("list", {accounts: accounts});
});

// 添加記錄
router.get('/account/create', function(req, res, next) {
  res.render("create");
});

// 新增紀錄
router.post('/account', function(req, res, next) {
  // 生成 id
  let id = shortid.generate();
  // 獲取請求體數據
  console.log(req.body);
  // 寫入數據
  db.get("accounts")
  // 在前面插入數據, 以便查看最新數據方便
    .unshift({id: id, ...req.body})
    .write();
  // 成功提醒
  res.render("success", {msg: "添加成功囉！", url: "/account"});
});

// 刪除記錄
router.get('/account/:id', function(req, res, next) {
  // 獲取 params 的 id 參數
  let id = req.params.id;
  // 刪除數據
  db.get("accounts")
    .remove({id: id})
    .write();
  // 提醒
  res.render("success", {msg: "刪除成功囉！", url: "/account"});
});

module.exports = router;
