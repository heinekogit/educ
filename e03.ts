function getAverage(numbers: number[]): number {
  // 配列が空なら 0 を返す
  if (numbers.length === 0) {
    return 0;
  }

  // 合計を reduce で計算（初期値は 0）
  const sum = numbers.reduce((acc, n) => acc + n, 0);

  // 平均を求めて返す
  return sum / numbers.length;
}

// テスト
console.log(getAverage([10, 20, 30])); // 20
console.log(getAverage([5]));          // 5
console.log(getAverage([]));           // 0
