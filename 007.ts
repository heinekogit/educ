function filterLongWords(words: string[]): string[] {
  return words
    .map(w => w.toUpperCase())   // 大文字に変換
    .filter(w => w.length >= 5); // 5文字以上だけ残す
}

// テスト
console.log(filterLongWords(["hello", "hi", "typescript", "cat"]));
// ["HELLO", "TYPESCRIPT"]

console.log(filterLongWords(["dog", "banana", "apple", "js"]));
// ["BANANA", "APPLE"]


// 冗長・中間変数を使うが、論理的に書くなら、===================================

const newWords = words
  .map(w => w.toUpperCase())
  .filter(w => w.length >= 5);

return newWords;
      // こういう書き方もあり
      // ただし、あまり中間変数を増やしすぎると、かえって読みにくくなることもあるので注意


