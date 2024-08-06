const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// 導入 express-session
const session = require('express-session');
// 導入 connect-mongo
const MongoStore = require('connect-mongo');
// 導入配置文件
const { DBHOST, DBPORT, DBNAME } = require("./config/config");


const indexRouter = require('./routes/web/index');
const authRouter = require('./routes/web/auth');
const authApiRouter = require('./routes/api/auth');

// 導入 account api 文件
const accountRouter = require('./routes/api/account');

var app = express();

// 設置 session 中間件
app.use(
  session({
    name: "sid", // 設置 cookie 的 name, 默認是 connect.sid
    secret: "keyboard cat", // 參與加密的字符串(又稱簽名) 加鹽
    saveUninitialized: false, // 是否每次請求都設置一個 cookie 來存儲 session 的 id，除非想對匿名用戶做訊息儲存
    resave: true, // 是否每次請求都重新保存 session ex: 20分鐘 4:00 登入 4:20 自動登出
    store: MongoStore.create({
      mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`, // mongoDB 的地址
      // ttl: 14 * 24 * 60 * 60, // = 14 days. Default
    }),
    cookie: {
      httpOnly: true, // 開啟後前端無法通過 JS 操作，防止客戶端修改 cookie
      // maxAge: 1000 * 300, // 5 分鐘，這一條是設置 sessionID 的過期時間，前台 cookie 也會過期！
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 天
    },
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json()); // 處理 application/json 格式的請求體
app.use(express.urlencoded({ extended: false })); // 處理 application/x-www-form-urlencoded 格式的請求體
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/api', accountRouter); // 使用 account api 文件
app.use('/api', authApiRouter); // 使用 auth api 文件

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // 響應 404 錯誤
  res.render("404");
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
