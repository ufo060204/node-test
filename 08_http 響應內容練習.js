// 導入 http 模組
const http = require('http');

// 創建服務器
const server = http.createServer((req, res) => {
  // 1.設置響應狀態碼
  res.statusCode = 203;
  // 2.響應狀態描述
  // res.statusMessage = "I am OK"; // 幾乎用不到
  // 3.設置響應頭
  // res.setHeader('Content-Type', 'text/html;charset=utf-8');
  // res.setHeader('Server', 'ABC Server');
  // res.setHeader('MyHeader', 'test test test');

  // 多個響應頭 之後的 setCookie 會用到
  res.setHeader('test', ['a', 'b', 'c']);
  
  // 4.響應體設置
  // write 可以多次調用
  // 通常設置了 write 內容 end 會設置為空的
  res.write('hello');
  res.write('hello');
  res.write('hello');
  res.write('hello');
  // end 只能調用一次
  res.end("node test！");
});

// 監聽服務器
server.listen(9000, () => {
  console.log('服務器已啟動, 請訪問: http://localhost:9000/');
});
