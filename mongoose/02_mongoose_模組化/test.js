// 導入 db
const db = require("./db/db");
// 導入 MovieModel
const MovieModel = require("./models/MovieModel");

// 調用函數
db( async () => {
  console.log("數據庫連接成功");
  try {
    //  電影的模型對象
    const data = await MovieModel.create({
    title: "盜夢空間",
    director: "克里斯多福·諾蘭",
  });
  console.log('插入成功~~', data);
  } catch (error) {
    // 如果有錯誤，則打印錯誤
    console.log('插入失敗~~', error);
  }
});
// 後面的 err 可以不用傳入 (因為 db.js 裡面有預設值)


// db( async () => {
//   console.log("數據庫連接成功");
//   try {
//     //  電影的模型對象
//     const data = await MovieModel.create({
//     title: "盜夢空間",
//     director: "克里斯多福·諾蘭",

//   });
//   console.log('插入成功~~', data);
//   } catch (error) {
//     // 如果有錯誤，則打印錯誤
//     console.log('插入失敗~~', error);
//   }
// }, () => {
//   console.log("數據庫連接失敗");
// }, () => {
//   console.log("數據庫連接斷開");
// });