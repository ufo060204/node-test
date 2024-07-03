// 1. 引入 fs 模組
const fs = require('fs');

// 2. 調用 fs.appendFile() 方法，將內容追加到文件中
// fs.appendFile('./座右銘.txt', '，我是追加的內容', (err) => {
//   // 如果寫入失敗，err 會是一個錯誤對象；寫入成功，err 會是 null
//   if (err) {
//     console.log('寫入文件失敗');
//     return;
//   } else {
//     console.log('寫入文件成功');
//   }
// });

// 3. 同步寫入文件
// fs.appendFileSync('./座右銘.txt', '\r\n，我是同步寫入的內容');

// 4. writeFile 實現追加寫入
{flag: 'a'} // a 是 append 的縮寫，不加這個參數，默認是 w，即寫入模式，會覆蓋原有內容
fs.writeFile('./座右銘.txt', 'love love love', { flag: 'a' }, (err) => {
  if (err) {
    console.log('寫入文件失敗');
    return;
  } else {
    console.log('寫入文件成功');
  }
});