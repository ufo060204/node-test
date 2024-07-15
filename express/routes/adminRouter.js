// 1. 導入 express 模組
const express = require("express");

// 2. 創建錄由對象
const router = express.Router();

// 3. 創建路由規則
// 後台
router.get("/admin", (req, res) => {
  //判斷 URL 中是否 code 參數等於 521
  res.send("後台首頁");
});

// 後台設置
router.get("/setting", (req, res) => {
  res.send("設置頁面");
});

// 4. 導出路由對象
module.exports = router;
