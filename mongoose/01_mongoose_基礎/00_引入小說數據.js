// 1. 安裝 mongoose
// 2. 引入 mongoose
const mongoose = require("mongoose");

// 3. 連接數據庫
mongoose.connect("mongodb://localhost:27017/node");

// 4. 設置回調函數
// 設置連接成功的回調函數
// once 一次 事件回調函數只執行一次(官方推薦)
mongoose.connection.once("open", async function () {
  // 5. 創建文檔結構對象 (Schema)
  // 設置集合中文檔的屬性及屬性值的類型
  let BookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true, // 必填
      // unique: true, // 唯一
    },
    author: {
      type: String,
      default: "佚名", // 默認值
    },
    style: {
      type: String,
      enum: ["歷史", "言情", "科幻", "懸疑"], // 枚舉
    },
    price: Number,
    is_hot: Boolean,
    tags: Array,
    pub_time: Date,
    test: mongoose.Schema.Types.Mixed, // 混合類型(任意類型)
  });

  // 6. 創建集合對象 (Model) 對文檔操作的封裝對象
  let BookModel = mongoose.model("novels", BookSchema);

  const booksData = [
    {
      name: "時光的迴廊",
      author: "林楓",
      style: "歷史",
      price: 299,
      is_hot: true,
      tags: ["古代", "朝代更替", "權謀"],
      pub_time: new Date("2023-05-15"),
      test: { era: "唐朝", pages: 520 },
    },
    {
      name: "星際迷航：新紀元",
      author: "陳星河",
      style: "科幻",
      price: 358,
      is_hot: true,
      tags: ["太空", "冒險", "未來科技"],
      pub_time: new Date("2024-01-10"),
      test: { spaceships: 5, aliens: true },
    },
    {
      name: "花都綺夢",
      author: "蘇小妹",
      style: "言情",
      price: 168,
      is_hot: false,
      tags: ["都市", "浪漫", "職場"],
      pub_time: new Date("2023-09-20"),
      test: "輕小說",
    },
    {
      name: "迷霧森林的秘密",
      author: "黃樹林",
      style: "懸疑",
      price: 238,
      is_hot: true,
      tags: ["推理", "驚悚", "自然"],
      pub_time: new Date("2023-11-30"),
      test: { clues: 15, chapters: 30 },
    },
    {
      name: "龍門客棧",
      author: "李武俠",
      style: "歷史",
      price: 199,
      is_hot: true,
      tags: ["武俠", "江湖", "恩怨"],
      pub_time: new Date("2023-07-07"),
      test: { weapons: ["劍", "刀", "棍"] },
    },
    {
      name: "量子糾纏",
      author: "張量子",
      style: "科幻",
      price: 328,
      is_hot: false,
      tags: ["量子力學", "平行宇宙", "時間旅行"],
      pub_time: new Date("2024-03-14"),
      test: { dimensions: 11 },
    },
    {
      name: "春風十里",
      author: "趙甜甜",
      style: "言情",
      price: 158,
      is_hot: true,
      tags: ["青春", "校園", "初戀"],
      pub_time: new Date("2023-04-01"),
      test: { seasons: ["春", "夏"] },
    },
    {
      name: "暗夜守護者",
      author: "馬驚悚",
      style: "懸疑",
      price: 268,
      is_hot: true,
      tags: ["犯罪", "心理", "都市"],
      pub_time: new Date("2023-10-31"),
      test: { crimes: 7, detectives: 2 },
    },
    {
      name: "大明風雲",
      author: "吳歷史",
      style: "歷史",
      price: 288,
      is_hot: false,
      tags: ["明朝", "政治", "軍事"],
      pub_time: new Date("2023-08-18"),
      test: { years: "1368-1644" },
    },
    {
      name: "銀河掠奪者",
      author: "劉星際",
      style: "科幻",
      price: 298,
      is_hot: true,
      tags: ["星際戰爭", "異星文明", "科技"],
      pub_time: new Date("2024-05-04"),
      test: { planets: 9, species: 15 },
    },
    {
      name: "櫻花雨",
      author: "王粉紅",
      style: "言情",
      price: 178,
      is_hot: false,
      tags: ["異國戀情", "文化衝突", "成長"],
      pub_time: new Date("2023-03-28"),
      test: { locations: ["東京", "北京"] },
    },
    {
      name: "幽靈酒店",
      author: "謝驚魂",
      style: "懸疑",
      price: 258,
      is_hot: true,
      tags: ["靈異", "懸疑", "恐怖"],
      pub_time: new Date("2023-12-13"),
      test: { ghosts: 13, rooms: 100 },
    },
    {
      name: "絲路傳奇",
      author: "張駝鈴",
      style: "歷史",
      price: 268,
      is_hot: false,
      tags: ["絲綢之路", "文化交流", "冒險"],
      pub_time: new Date("2023-06-18"),
      test: { route: ["西安", "敦煌", "撒馬爾罕"] },
    },
    {
      name: "人工智能叛變",
      author: "李數碼",
      style: "科幻",
      price: 338,
      is_hot: true,
      tags: ["AI", "反烏托邦", "人性"],
      pub_time: new Date("2024-07-01"),
      test: { ai_types: ["強AI", "弱AI"] },
    },
    {
      name: "轉角遇到愛",
      author: "陳浪漫",
      style: "言情",
      price: 148,
      is_hot: true,
      tags: ["都市", "巧遇", "甜蜜"],
      pub_time: new Date("2023-02-14"),
      test: { chapters: 20, pov: "雙線" },
    },
    {
      name: "無聲的罪證",
      author: "林推理",
      style: "懸疑",
      price: 278,
      is_hot: false,
      tags: ["法庭", "心理", "證據"],
      pub_time: new Date("2023-09-05"),
      test: { evidence: 42, suspects: 5 },
    },
    {
      name: "長安十二時辰",
      author: "馬長安",
      style: "歷史",
      price: 308,
      is_hot: true,
      tags: ["唐朝", "懸疑", "市井"],
      pub_time: new Date("2023-11-11"),
      test: { hours: 12, characters: 50 },
    },
    {
      name: "深海迷航",
      author: "王海洋",
      style: "科幻",
      price: 318,
      is_hot: false,
      tags: ["海底探險", "未知生物", "科學探索"],
      pub_time: new Date("2024-04-22"),
      test: { depth: "11000m", creatures: 28 },
    },
    {
      name: "總裁的祕密花園",
      author: "蘇瞇瞇",
      style: "言情",
      price: 168,
      is_hot: true,
      tags: ["豪門", "契約戀愛", "商戰"],
      pub_time: new Date("2023-08-08"),
      test: { flowers: ["玫瑰", "百合", "薰衣草"] },
    },
    {
      name: "失憶症患者",
      author: "周記憶",
      style: "懸疑",
      price: 248,
      is_hot: false,
      tags: ["心理", "記憶", "身份"],
      pub_time: new Date("2023-10-10"),
      test: { memories: null, timeline: "混亂" },
    },
  ];

  try {
    // 使用 BookModel.create() 批量創建文檔
    const result = await BookModel.create(booksData);

    // 打印成功添加的文檔數量
    console.log(`成功添加了 ${result.length} 本書籍`);

    // 如果需要，可以遍歷並打印每本書的詳細信息
    result.forEach((book, index) => {
      console.log(`書籍 ${index + 1}:`, book);
    });
  } catch (error) {
    // 如果有錯誤，則打印錯誤信息
    console.error("添加文檔時發生錯誤:", error);
  } finally {
    // 操作完成後關閉數據庫連接
    // 注意：在實際應用中，您可能不希望在每次操作後就關閉連接
    await mongoose.connection.close();
    console.log("數據庫連接已關閉");
  }
});
// 設置連接失敗的回調函數
mongoose.connection.once("error", function () {
  console.log("數據庫連接失敗");
});

// 設置連接斷開的回調函數
mongoose.connection.once("close", function () {
  console.log("數據庫連接斷開");
});
