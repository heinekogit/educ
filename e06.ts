// 1. 型定義（共通の設計図）
type User = {
  name: string;
  age: number;
};

// 2. 配列で使う
const users: User[] = [
  { name: "Taro", age: 18 },
  { name: "Hanako", age: 22 }
];

// 3. 関数でも使う
function printUser(u: User) {
  console.log(`${u.name} (${u.age}歳)`);
}

printUser(users[0]);






