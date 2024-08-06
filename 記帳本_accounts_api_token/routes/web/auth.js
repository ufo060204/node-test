var express = require("express");
var router = express.Router();
// 導入用戶模型
const UserModel = require("../../models/UserModel");
const md5 = require("md5");

// 註冊
router.get("/register", function (req, res, next) {
  // 渲染註冊頁面
  res.render("auth/register");
});

// 註冊用戶
router.post("/register", async function (req, res, next) {
  // 表單驗證
  // 獲取請求體數據
  try {
    const user = await UserModel.create({...req.body,  password: md5(req.body.password)});
    console.log("註冊成功~~", user);
    res.render("success", { msg: "註冊成功", url: "/login" });
  } catch (error) {
    res.status(500).send("註冊失敗，請稍後再試");
  }
});

// 登入
router.get("/login", function (req, res, next) {
  // 渲染註冊頁面
  res.render("auth/login");
});

// 登入操作
router.post("/login", async function (req, res, next) {
  // 獲取用戶名和密碼
  let { username, password } = req.body;

  try {
    // 查詢用戶
    const user = await UserModel.findOne({ username });

    if (user && user.password === md5(password)) {
      req.session.username = user.username; // 設置 session 用戶信息
      req.session._id = user._id; // 設置 session 用戶 id
      res.render("success", { msg: "登入成功", url: "/account" });
    } else {
      res.status(401).send("用戶名或密碼錯誤");
    }
  } catch (error) {
    console.error("登入過程中發生錯誤:", error);
    res.status(500).send("登入失敗，請稍後再試");
  }
});

// 登出
router.post("/logout", function (req, res, next) {
  // 清除 session
  req.session.destroy(() => {
    res.render("success", { msg: "登出成功", url: "/login" });
  }); 
});

module.exports = router;
