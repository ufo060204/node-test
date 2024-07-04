// 導入 http 模組
const http = require('http');

// 創建服務器
const server = http.createServer((req, res) => {
  res.end(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <style>
      td {
        padding: 20px 40px;
      }
      table tr:nth-child(odd) {
        background-color: #aef;
      }
      table tr:nth-child(even) {
        background-color: #fcb;
      }
      table, td {
        border-collapse: collapse;
      }
    </style>
    <body>
      <table border="1">
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
      </table>
      <script>
        // 獲取所有 td
        let tds = document.querySelectorAll('td');
        // 迴圈
        tds.forEach(item => {
          item.onclick = function() {
            // 點擊時，將 td 的背景色改為紅色
            this.style.backgroundColor = '#222';
          }
        });
      </script>
    </body>
    </html>
    `
  );
});

// 監聽服務器
server.listen(9000, () => {
  console.log('服務器已啟動, 請訪問: http://localhost:9000/');
});
