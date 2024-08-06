// 導入 express
const express = require("express");
// 導入 jwt
const jwt = require("jsonwebtoken");
// 導入驗證 token 中間件
const checkTokenMiddleware = require("../../middlewares/checkTokenMiddleware");

const router = express.Router();
// 導入 moment
const moment = require("moment");
const AccountModel = require("../../models/AccountModel");

// 測試
// console.log(moment('2024-07-20').toDate());
// 格式化日期
// console.log(moment(new Date()).format("YYYY-MM-DD"));

// 記帳本列表
router.get("/account", checkTokenMiddleware, async function (req, res, next) {
  console.log(req.user);
  try {
    const accounts = await AccountModel.find().sort({ time: -1 }).exec();
    res.json({
      code: "0000",
      msg: "獲取數據成功",
      data: accounts,
    });
  } catch (error) {
    res.status(500).json({
      code: "1001",
      msg: "獲取數據失敗",
      data: null,
    });
  }
});

// 獲取單個帳單訊息
router.get("/account/:id", checkTokenMiddleware, async function (req, res, next) {
  // 獲取 params 的 id 參數
  let id = req.params.id;
  try {
    // 查詢數據庫
    const account = await AccountModel.findOne({ _id: id }).exec();
    console.log(account);
    res.json({
        code: '0000',
        msg: "獲取數據成功",
        data: account,
      });
  } catch (error) {
    res.json({
      code: '1004',
      msg: "獲取數據失敗",
      data: null,
    });
  }
});

// 更新單筆帳單訊息
router.patch("/account/:id", checkTokenMiddleware, async function (req, res, next) {
  // 獲取 params 的 id 參數
  let id = req.params.id;
  // 更新數據
  try {
    const accounts = await AccountModel.updateOne({ _id: id }, req.body);
    // 在更新數據後，再次查詢數據，獲取更新後的單筆數據
    if(accounts) {
      const updateAccount = await AccountModel.findOne({ _id: id }).exec();
      res.json({
        code: "0000",
        msg: "更新成功囉！",
        data: updateAccount,
      });
    }
  } catch (error) {
    res.json({
      code: "1005",
      msg: "更新數據失敗",
      data: null,
    });
  }
});


// 新增紀錄
router.post("/account", checkTokenMiddleware, async function (req, res, next) {
  // 獲取請求體數據 2024-07-20 => new Date()
  // 2024-07-20 => moment => new Date()
  console.log(req.body);
  // 表單驗證
  if (!req.body.title) {
    res.json({
      code: "1003",
      msg: "請填寫標題",
      data: null,
    });
    return;
  } else if (!req.body.time) {
    res.json({
      code: "1004",
      msg: "請填寫時間",
      data: null,
    });
    return;
  } else if (!req.body.account) {
    res.json({
      code: "1005",
      msg: "請填寫金額",
      data: null,
    });
  }

  try {
    const accounts = await AccountModel.create({
      ...req.body,
      time: moment(req.body.time).toDate(), // 直接用新的 time 去覆蓋原本的 req.body 的 time
    });
    console.log("插入成功~~", accounts);
    // res.render("success", { msg: "添加成功囉！", url: "/account" });
    res.json({
      code: "0000",
      msg: "添加成功囉！",
      data: accounts,
    });
  } catch (error) {
    console.log(error);
    // res.status(500).send("插入數據失敗~~" + error.message);
    res.json({
      code: "1002",
      msg: "插入數據失敗",
      data: null,
    });
  }
});

// 刪除記錄
router.delete("/account/:id", checkTokenMiddleware, async function (req, res, next) {
  // 獲取 params 的 id 參數
  let id = req.params.id;
  // 刪除數據
  try {
    const accounts = await AccountModel.deleteOne({ _id: id });
    console.log("刪除成功~~", accounts);
    // res.render("success", { msg: "刪除成功囉！", url: "/account" });
    res.json({
      code: "0000",
      msg: "刪除成功囉！",
      data: {},
    });
  } catch (error) {
    // res.status(500).send("刪除數據失敗~~" + error.message);
    res.json({
      code: "1003",
      msg: "刪除數據失敗",
      data: null,
    });
  }
  // db.get("accounts")
  //   .remove({id: id})
  //   .write();
  // // 提醒
  // res.render("success", {msg: "刪除成功囉！", url: "/account"});
});

module.exports = router;
