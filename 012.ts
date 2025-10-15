function getAverage(points: number[]): number {
  if (points.length === 0) {
    return 0; // 空配列なら0を返す
  }

  const sum = points.reduce((acc, n) => acc + n, 0); // 合計を出す
  const avg = sum / points.length; // 平均を計算
  return avg;
}

// 使用例
console.log(getAverage([80, 90, 100])); // 90
console.log(getAverage([10, 20]));      // 15
console.log(getAverage([]));            // 0
