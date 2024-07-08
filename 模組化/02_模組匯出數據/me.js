// 宣告一個 function
function run () {
  // 印出字串
  console.log('我在跑步');
}

function fly () {
  // 印出字串
  console.log('我在飛行');
}

// 將 function 匯出
// module.exports = {
//   run,
//   fly
// };

// export 匯出
// exports.run = run;
// exports.fly = fly;

// 1. module.exports 可以匯出任意數據
// module.exports = '你好嗎';

// 2. 不能使用 exports = value 的方式來匯出數據
// exports = '你好嗎'; // 這樣是錯誤的

// exports = module.exports = {};
// module.exports 是 exports 的參考
// exports = module.exports = {run: run};
// exports.run = run;
console.log(module.exports);
console.log(module.exports === exports);
