var express = require('express');
var router = express.Router();
// 引入 formidable
const { formidable } = require('formidable');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 顯示網頁表單
router.get('/portrait', function(req, res, next) {
  res.render('portrait');
});

// 處理文件上傳
router.post('/portrait', function(req, res, next) {
  // 創建表單對象
  const form = formidable({
    // 設置文件上傳目錄
    uploadDir: __dirname + '/../public/images',
    // 保留文件擴展名
    keepExtensions: true
  });
  // 解析請求報文, 將結果放在 fields 和 files 中
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(fields); // text radio checkbox select textarea
    console.log(files); // file
    // res.json({ fields, files });
    // 伺服器保存該圖片訪問 URL
    let url = "/images/" + files.portrait[0].newFilename; // 將來將此數據保存在數據庫中
    res.send(url);
  });
});

module.exports = router;
