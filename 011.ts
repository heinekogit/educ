function getGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 75) {
    return "B";
  } else if (score >= 60) {
    return "C";
  } else {
    return "F";
  }
}

// テスト
console.log(getGrade(95)); // "A"
console.log(getGrade(80)); // "B"
console.log(getGrade(65)); // "C"
console.log(getGrade(40)); // "F"
