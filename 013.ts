function doubleNumbers(numbers: number[]): number[] {
  const double = numbers.map(n => n * 2);
  return double;
}

// テスト
console.log(doubleNumbers([5, 10, 15])); // [10, 20, 30]

