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
// 導入 moment
const moment = require("moment");
const AccountModel = require('../models/AccountModel');

// 測試
// console.log(moment('2024-07-20').toDate());
// 格式化日期
// console.log(moment(new Date()).format("YYYY-MM-DD"));

// 記帳本列表
router.get('/account', async function(req, res, next) {
  // 獲取所有帳單訊息
  // let accounts = db.get("accounts").value();
  // 讀取集合中的所有數據
  try {
    const accounts = await AccountModel.find().sort({time: -1}).exec();
    console.log(accounts);
    res.render("list", {accounts: accounts, moment: moment});
  } catch (error) {
    res.status(500).send("獲取數據失敗~~" + error.message);
  }
});

// 添加記錄
router.get('/account/create', function(req, res, next) {
  res.render("create");
});

// 新增紀錄
router.post('/account', async function(req, res, next) {
  // 獲取請求體數據 2024-07-20 => new Date()
  // 2024-07-20 => moment => new Date()
  console.log(req.body);
  try {
    const accounts = await AccountModel.create({
      ...req.body,
      time: moment(req.body.time).toDate(), // 直接用新的 time 去覆蓋原本的 req.body 的 time
    });
    console.log('插入成功~~', accounts);
    res.render("success", { msg: "添加成功囉！", url: "/account" });
  } catch (error) {
    console.log(error);
    res.status(500).send("插入數據失敗~~" + error.message);
  }
});

// 刪除記錄
router.get('/account/:id', async function(req, res, next) {
  // 獲取 params 的 id 參數
  let id = req.params.id;
  // 刪除數據
  try {
    const accounts = await AccountModel.deleteOne({ _id: id });
    console.log('刪除成功~~', accounts);
    res.render("success", {msg: "刪除成功囉！", url: "/account"});
  } catch (error) {
    res.status(500).send("刪除數據失敗~~" + error.message);
  }
  // db.get("accounts")
  //   .remove({id: id})
  //   .write();
  // // 提醒
  // res.render("success", {msg: "刪除成功囉！", url: "/account"});
});

module.exports = router;
