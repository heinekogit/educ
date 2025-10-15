const nums = [10, 20, 30];

const total = nums.reduce((acc, cur, idx, arr) => {
  console.log("acc:", acc, "cur:", cur, "idx:", idx, "arr:", arr);
  return acc + cur;
}, 0);

console.log("結果:", total);



// 応用例 ===================================
// index を使って「何番目の要素か」を出す
nums.reduce((acc, cur, idx) => {
  console.log(`要素${idx}: ${cur}`);
  return acc + cur;
}, 0);

// array を使って「全体にアクセス」もできる
nums.reduce((acc, cur, idx, arr) => {
  if (idx === arr.length - 1) {
    console.log("最後の要素:", cur);
  }
  return acc + cur;
}, 0);


// **reduceで「配列 → オブジェクト」に変換する」**実例 ===================================
const fruits = [
  { name: "apple", price: 100 },
  { name: "banana", price: 80 },
  { name: "orange", price: 120 }
];

const fruitMap = fruits.reduce((acc, cur) => {
  acc[cur.name] = cur.price; // ← キーと値を追加
  return acc; // ← 累積オブジェクトを返す
}, {}); // ← 初期値は「空オブジェクト」

console.log(fruitMap);

// 結果　{ apple: 100, banana: 80, orange: 120 }


// 別パターン：数値をまとめる   ===================================

const items = [
  { category: "fruit", price: 100 },
  { category: "fruit", price: 80 },
  { category: "drink", price: 120 },
];

const totals = items.reduce((acc, cur) => {
  // categoryがまだなければ初期化
  if (!acc[cur.category]) {
    acc[cur.category] = 0;
  }
  acc[cur.category] += cur.price;
  return acc;
}, {});

console.log(totals);

// 結果　{ fruit: 180, drink: 120 }

