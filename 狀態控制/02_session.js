// 導入 express
const express = require('express');
// 導入 express-session
const session = require('express-session');
// 導入 connect-mongo
const MongoStore = require('connect-mongo');


// 創建 express app
const app = express();
// 設置 session 中間件
app.use(
  session({
    name: "sid", // 設置 cookie 的 name, 默認是 connect.sid
    secret: "keyboard cat", // 參與加密的字符串(又稱簽名) 加鹽
    saveUninitialized: false, // 是否每次請求都設置一個 cookie 來存儲 session 的 id，除非想對匿名用戶做訊息儲存
    resave: true, // 是否每次請求都重新保存 session ex: 20分鐘 4:00 登入 4:20 自動登出
    store: MongoStore.create({
      mongoUrl: 'mongodb://localhost:27017/express-session', // mongoDB 的地址
      // ttl: 14 * 24 * 60 * 60, // = 14 days. Default
    }),
    cookie: { 
      httpOnly: true, // 開啟後前端無法通過 JS 操作，防止客戶端修改 cookie
      maxAge: 1000 * 300, // 5 分鐘，這一條是設置 sessionID 的過期時間，前台 cookie 也會過期！
    },
  })
);

// 創建路由規則
app.get('/', (req, res) => {
  res.send('home');
});

// session 的設置
app.get('/login', (req, res) => {
  // username=admin&password=admin
  if(req.query.username === 'admin' && req.query.password === 'admin') {
    // 設置 session 訊息
    req.session.username = 'admin';
    req.session.uid = '08e06e06e08' // 將來由更多資訊可追加設置
    // 成功響應
    res.send('登入成功');
  } else {
    res.send('登入失敗');
  }
});

// session 的讀取
app.get('/cart', (req, res) => {
  // 檢測 session 是否存在用戶數據
  // 很多操作中間件都已經幫我們完成了，像是把 session 數據放到 req.session 上
  if(req.session.username) {
    res.send(`購物車頁面，歡迎您 ${req.session.username}`);
  } else {
    res.send('您還未登入');
  }
});

// session 的銷毀
app.get('/logout', (req, res) => {
  // 銷毀 session
  req.session.destroy(err => {
    if(err) {
      console.log(err);
    }
    res.send('登出成功');
  }
  );
}
);

// 啟動伺服器
app.listen(3000, () => {
    console.log('伺服器已啟動... at http://localhost:3000');
});