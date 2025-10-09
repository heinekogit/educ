function sumPositiveNumbers(numbers: number[]): number {
  return numbers
    .filter(n => n > 0)              // 正の数だけ残す
    .reduce((acc, n) => acc + n, 0); // 合計する（初期値 0）
}

// テスト
console.log(sumPositiveNumbers([1, -3, 5, 0, -2])); // 6
console.log(sumPositiveNumbers([-1, -2, -3]));      // 0
console.log(sumPositiveNumbers([]));                // 0
