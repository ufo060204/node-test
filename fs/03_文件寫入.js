/* 需求
新建一個文件，座右銘.txt，寫入內容，三人行必有我師焉。 */

// 1. 載入 fs 模組
const fs = require('fs');

// 2. 寫入文件(非同步)
// fs.writeFile('./座右銘.txt', '三人行必有我師焉。', (err) => {
//   // err 寫入失敗時，err 會是一個錯誤對象；寫入成功 err 會是 null
//   if (err) {
//     console.log('寫入文件失敗');
//     return;
//   } else {
//     console.log('寫入文件成功');
//   }
// });

// console.log(1 + 1);


// 3. 同步寫入文件
fs.writeFileSync('./data.txt', 'test');
