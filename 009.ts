function extractLongWords(text: string): string[] {
  return text
    .trim()                          // 前後の空白を除去
    .split(" ")                       // スペースで単語に分割
    .filter(w => w.length > 0)        // 空文字を除去
    .filter(w => w.length >= 5)       // 5文字以上だけ残す
    .map(w => w.toUpperCase());       // 大文字に変換
}

// テスト
console.log(extractLongWords("TypeScript is super fun to learn"));
// ["TYPESCRIPT", "SUPER", "LEARN"]

console.log(extractLongWords("   Hello   world  from   TS  "));
// ["HELLO", "WORLD"]
