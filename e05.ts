// find版 ===================================

type User = {
  name: string;
  age: number;
};

function findUserByName(users: User[], targetName: string): User | undefined {
  // findメソッドで最初に一致したユーザーを返す
  return users.find(u => u.name === targetName);
}

// テスト
const users: User[] = [
  { name: "Taro", age: 18 },
  { name: "Hanako", age: 22 },
  { name: "Ken", age: 25 }
];

console.log(findUserByName(users, "Hanako")); // { name: "Hanako", age: 22 }
console.log(findUserByName(users, "Mika"));   // undefined


// filter版 ===================================

type User = {
  name: string;
  age: number;
};

function filterUserByName(users: User[], targetName: string): User[] {
  // filterで条件に合うすべてのユーザーを取り出す
  return users.filter(u => u.name === targetName);
  //return users.filter(u => u.name === targetName && u.age >= 18); // 複数条件に年齢も加えた例
}

// テスト
const users: User[] = [
  { name: "Taro", age: 18 },
  { name: "Hanako", age: 22 },
  { name: "Ken", age: 25 },
  { name: "Hanako", age: 30 } // 同名ユーザー
];

console.log(filterUserByName(users, "Hanako"));
// => [ { name: "Hanako", age: 22 }, { name: "Hanako", age: 30 } ]

console.log(filterUserByName(users, "Mika"));
// => []

