var express = require('express');
var router = express.Router();

// 記帳本列表
router.get('/account', function(req, res, next) {
  res.send('帳本列表')
});

// 添加記錄
router.get('/account/create', function(req, res, next) {
  res.send('添加記錄')
});

module.exports = router;
