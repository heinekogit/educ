// ① 型定義（オブジェクト“型”を作る＝設計図）
type User = {
  name: string; // 名前は文字列
  age: number;  // 年齢は数値
};

// ② 実体を1人ぶん作る（この形がUser型に合っている）
const user: User = {
  name: "Taro",
  age: 25
};

// ③ 複数人を配列にする（User型の配列）
const users: User[] = [
  { name: "Taro", age: 25 },
  { name: "Hanako", age: 30 },
  { name: "Ken", age: 22 }
];

// ④ 関数で使う：Userを1人受け取って挨拶文を返す
function greetUser(user: User): string {
  return `こんにちは、${user.name}さん（年齢：${user.age}）`;
}

// ⑤ 関数を使う（1人の場合）
console.log(greetUser(user));
// → こんにちは、Taroさん（年齢：25）

// ⑥ 配列の場合：全員に挨拶をする
function greetAll(users: User[]): string[] {
  return users.map(u => `こんにちは、${u.name}さん（年齢：${u.age}）`);
}

console.log(greetAll(users));
/*
[
  "こんにちは、Taroさん（年齢：25）",
  "こんにちは、Hanakoさん（年齢：30）",
  "こんにちは、Kenさん（年齢：22）"
]
*/
