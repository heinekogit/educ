function countWords(text: string): number {
  // 前後の空白を削除
  const trimmed = text.trim();

  // 空文字なら 0
  if (trimmed === "") {
    return 0;
  }

  // 空白で分割して、空要素を除いてカウント
  const words = trimmed.split(" ").filter(w => w.length > 0);
  return words.length;
}

// テスト
console.log(countWords("I love TypeScript"));  // 3
console.log(countWords("Hello   world"));      // 2（スペース連続でもOK）
console.log(countWords("   "));                // 0
console.log(countWords(""));                   // 0
