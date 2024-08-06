// 導入 jwt
const jwt = require('jsonwebtoken');

// 創建(生成) token
// let token = jwt.sign(用戶資料, 加密字串, 配置對象);
// let token = jwt.sign({
//   username: 'Jerry',
// },"secret",{
//   expiresIn: 60 * 2 // 有效時間，單位是秒
// });

// console.log(token);

let t =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkplcnJ5IiwiaWF0IjoxNzIyOTUzMTg1LCJleHAiOjE3MjI5NTMzMDV9.Pny4eCTdFc1I3bcCHO7WiHYnQrUB85_yIL1arIaLinA";

// 較驗 token
jwt.verify(t, "secret", (err, data) => {
  if (err) {
    console.log(err, "token 驗證失敗");
    return;
  } else {
    console.log(data);
  }
});
