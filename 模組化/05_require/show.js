/* 
偽代碼
*/

function require(file) {
  // 1. 將鄉對路徑轉換成絕對路徑, 定位目標文件夾
  let absolutePath = path.resolve(__dirname, file);
  // 2. 緩存檢測
  if (require.cache[absolutePath]) {
    return require.cache[absolutePath];
  }
  // 3. 讀取文件代碼
  let code = fs.readFileSync(absolutePath).toString();
  // 4. 包裹成一個函數執行
  let module = {}
  let exports = module.exports = {}
  (function (exports, require, module, __filename, __dirname) {
    const test = {
      name: "test",
    };

    module.exports = test;

    // 輸出
    console.log(arguments.callee.toString());
  })(exports, require, module, __filename, __dirname);
  // 5. 緩存結果
  cache[absolutePath] = module.exports;
  // 6. 返回 module.exports 的值
  return module.exports;
}

const m = require('./me.js');