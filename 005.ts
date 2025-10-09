function capitalize(str: string): string {
  if (str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// テスト
console.log(capitalize("tomo"));        // "Tomo"
console.log(capitalize("typescript"));  // "Typescript"
console.log(capitalize(""));            // ""
