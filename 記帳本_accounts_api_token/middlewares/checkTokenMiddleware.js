// 導入 jwt
const jwt = require("jsonwebtoken");
// 讀取環境變數
const { SECRET } = require("../config/config");

// 驗證 token 中間件
module.exports = (req, res, next) => {
  const token = req.headers["token"];

  if (!token) {
    return res.status(403).json({
      code: "2003",
      msg: "缺少 token",
      data: null,
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    // 如果驗證成功，則執行下一個中間件
    next();
  } catch (error) {
    return res.status(401).json({
      code: "2004",
      msg: "無效的 token",
      data: null,
    });
  }
}
