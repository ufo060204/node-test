/* 
觀書有感.txt
 */
// 1. 引入 fs 模組
const fs = require("fs");

// 2. 創建寫入流對象
const ws = fs.createWriteStream("./觀書有感.txt",);

// 3 write 寫入文件
ws.write("半畝方塘一鑑開，\r\n");
ws.write("天光雲影共徘徊。\r\n");
ws.write("問渠那得清如許，\r\n");
ws.write("為有源頭活水來。\r\n");

// 4. 關閉寫入流 .close() 可加可不加
ws.close();


/* 程式開啟一個檔案是需要消耗資源的，串流寫入可以減少開啟關閉檔案的次數。
流式寫入方式適用於大檔案寫入或間隙寫入的場景，writeFile適合寫入頻率較低的場景 */