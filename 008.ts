function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(n => n % 2 === 0);
}

// テスト
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvenNumbers([7, 9, 11]));         // []
console.log(filterEvenNumbers([]));                 // []
