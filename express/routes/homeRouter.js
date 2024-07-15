// 1. 導入 express 模組
const express = require("express");

// 2. 創建錄由對象
const router = express.Router();

// 3. 創建路由規則
router.get("/home", (req, res) => {
  res.send("前台首頁");
});

router.get("/search", (req, res) => {
  res.send("內容搜索頁面");
});

// 4. 導出路由對象
module.exports = router;
