// 聲明中間件函數檢測是否登入
module.exports = (req, res, next) => {
  // 判斷是否登入
  if (!req.session.username) {
    return res.redirect("/login");
  }
  next();
};
