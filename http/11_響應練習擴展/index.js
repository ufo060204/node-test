// 獲取所有 td
let tds = document.querySelectorAll("td");
// 迴圈
tds.forEach((item) => {
  item.onclick = function () {
    // 點擊時，將 td 的背景色改為紅色
    this.style.backgroundColor = "#222";
  };
});
