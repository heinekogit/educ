// ユーザー型の定義
type User = {
  id: number;
  name: string;
};

// 関数定義
function findUserByName(users: User[], targetName: string): User | null {
  const found = users.find(u => u.name === targetName);
  return found ?? null; // 見つからなければ null を返す
}

// テスト
const users: User[] = [
  { id: 1, name: "Taro" },
  { id: 2, name: "Hanako" },
  { id: 3, name: "Ken" }
];

console.log(findUserByName(users, "Hanako")); // { id: 2, name: "Hanako" }
console.log(findUserByName(users, "Mika"));   // null
