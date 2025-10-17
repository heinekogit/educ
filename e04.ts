function getUserMessage(user: { name: string; age: number }): string {
  if (user.age < 18) {
    return `${user.name} is a minor.`;
  } else {
    return `${user.name} is an adult.`;
  }
}

// テスト
console.log(getUserMessage({ name: "Taro", age: 17 }));   // Taro is a minor.
console.log(getUserMessage({ name: "Hanako", age: 20 })); // Hanako is an adult.


// 短くすると　===================================
function getUserMessage(user: { name: string; age: number }): string {
  return `${user.name} is ${user.age < 18 ? "a minor" : "an adult"}.`;
}


// 配列の中に複数の user を入れて、成人だけを抽出する関数　===================================
type User = {
  name: string;
  age: number;
};

function getAdultUsers(users: User[]): User[] {
  // filterで「年齢が18以上の人だけ」を残す
  return users.filter(u => u.age >= 18);
}

// テスト
const userList: User[] = [
  { name: "Taro", age: 17 },
  { name: "Hanako", age: 20 },
  { name: "Ken", age: 25 },
  { name: "Mika", age: 15 },
];

const adults = getAdultUsers(userList);
console.log(adults);





