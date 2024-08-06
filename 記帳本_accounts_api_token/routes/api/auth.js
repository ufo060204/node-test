const express = require("express");
const router = express.Router();
// 導入 jwt
const jwt = require("jsonwebtoken");
// 導入環境變數
const { SECRET } = require("../../config/config");
// 導入用戶模型
const UserModel = require("../../models/UserModel");
const md5 = require("md5");



// 登入操作
router.post("/login", async function (req, res, next) {
  // 獲取用戶名和密碼
  let { username, password } = req.body;

  try {
    // 查詢用戶
    const user = await UserModel.findOne({ username });

    if (user && user.password === md5(password)) {
      // 創建 token
      const token = jwt.sign(
        {
          username: user.username,
          id: user._id,
        },
        SECRET,
        {
          expiresIn: 60 * 60 * 24 * 7, // 一周
        }
      );
      // 響應 token
      res.json({ code: 2000, msg: "登入成功", data: { token } });
    } else {
      return res.json({ code: 2002, msg: "帳號或密碼錯誤", data: null });
    }
  } catch (error) {
    console.error("登入過程中發生錯誤:", error);
    res.json({ code: 2001, msg: "數據庫讀取失敗", data: null });
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
