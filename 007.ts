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
