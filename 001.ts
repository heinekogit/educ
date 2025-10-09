// 関数に型をつける

function add(a: number, b: number): number {
  return a + b;
}

function sayHello(name: string): string {
  return "Hello, " + name + "!";
}

// 簡単なテスト
const result1 = add(2, 3);       // number
const result2 = sayHello("tomo"); // string
