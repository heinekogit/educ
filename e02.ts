function getEvenNumbers(numbers: number[]): number[] {
  const result: number[] = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }
  return result;
}

// テスト
console.log(getEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]
console.log(getEvenNumbers([10, 11, 12]));    // [10, 12]



// リテラル・テンプレートによる書き換え例 ===================================

function getEvenNumbers(numbers: number[]): number[] {
  const result: number[] = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }
  return result;
}

// テスト（表示をテンプレートリテラルで整形）
const a = [1, 2, 3, 4, 5];
const b = [10, 11, 12];

const resA = getEvenNumbers(a);
const resB = getEvenNumbers(b);

console.log(`入力: ${a.join(", ")} → 偶数だけ: ${resA.join(", ")}`);
// 入力: 1, 2, 3, 4, 5 → 偶数だけ: 2, 4

console.log(`入力: ${b.join(", ")} → 偶数だけ: ${resB.join(", ")}`);
// 入力: 10, 11, 12 → 偶数だけ: 10, 12


